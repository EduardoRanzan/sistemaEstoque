import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/Layout";
import Logo from "../../components/Logo";


export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [erro, setErro] = useState("");
  const navigate = useNavigate();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setErro("");

    try {
      const resp = await fetch(`${import.meta.env.VITE_API_BACK}auth`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, senha }),
      });

      if (!resp.ok) {
        throw new Error("Credenciais inválidas");
      }

      const data = await resp.json();
      localStorage.setItem("token", data.token);
      localStorage.setItem("nome", data.user.nome)
      
      navigate("/dashboard")
    } catch (err: any) {
      setErro(err.message);
    }
  }

  return (
    <Layout>
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-r from-blue-600 to-cyan-400">
    <div className="w-full max-w-md rounded-xl bg-white p-8 shadow-md">
      <Logo />
        {erro && (
          <div className="mb-4 rounded bg-red-100 p-2 text-center text-red-700">
            {erro}
          </div>
        )}

        <form onSubmit={handleSubmit} className="-spacey-4">
          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Digite seu email"
              required
            />
          </div>

          <div>
            <label className="mb-1 block text-sm font-medium text-gray-700">
              Senha
            </label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              className="w-full rounded border border-gray-300 p-2 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Digite sua senha"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full rounded bg-blue-500 py-2 font-semibold text-white transition hover:bg-blue-600 mt-8">
            Entrar
          </button>
        </form>
      </div>
    </div>
    </Layout>
  );
}
