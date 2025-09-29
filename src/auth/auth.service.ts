import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from 'src/users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UsersService,
  ) {}

  async login(email: string, senha: string) {
    const user = await this.userService.findByEmail(email);
    if (!user || user.senha !== senha) {
      throw new UnauthorizedException('Credenciais inválidas');
    }

    const payload = { sub: user.id };
    return {
      token: this.jwtService.sign(payload, { expiresIn: '1h' }),
      user: {
        id: user.id,
        nome: user.nome,
        email: user.email,
      },
    };
  }

}
