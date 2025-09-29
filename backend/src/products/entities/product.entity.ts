import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export class Product {
    @PrimaryGeneratedColumn('uuid')
    id: string

    @Column()
    nome: string
    
    @Column({nullable: true})
    descricao: string

    @Column()
    preco: number
}
