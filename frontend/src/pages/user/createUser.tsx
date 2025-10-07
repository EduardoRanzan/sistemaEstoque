import { useState } from "react";
import Navbar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";

export default function CreateUser() {
    const navigate = useNavigate();
    
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    const novoUsuario = {nome, email, senha};

    async function handleSave(){
        try {
            const resp = await fetch(`${import.meta.env.VITE_API_BACK}users`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(novoUsuario),
      });


        if (!resp.ok) throw new Error("Erro ao salvar usuário");
      
        navigate("/users")

    } catch (err: any) {
        navigate("/users")
    }
  }

    async function handleCancelar() {
        navigate("/users")
    }


  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex justify-center px-4 mt-10">
        <div className="w-9/10 rounded-xl bg-white p-8 shadow-xl">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 text-justify">
            Novo Usuário
          </h2>

          <form onSubmit={handleSave} className="flex flex-col gap-6">
            <div className="flex flex-col">
              <label htmlFor="nome" className="mb-1 text-sm font-medium text-gray-700">
                Nome
              </label>
              <input
                id="nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/3"
                placeholder="Digite o nome"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="email" className="mb-1 text-sm font-medium text-gray-700">
                E-mail
              </label>
              <input
                id="email"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/3"
                placeholder="Digite o e-mail"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="senha" className="mb-1 text-sm font-medium text-gray-700">
                Senha
              </label>
              <input
                id="senha"
                type="password"
                value={senha}
                onChange={(e) => setSenha(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/3"
                placeholder="Digite a senha"
                required
              />
            </div>

             <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
                onClick={handleCancelar}
                className="px-4 py-2 rounded-lg font-semibold border border-gray-300 text-gray-700 hover:bg-gray-100 transition"
              >
                Cancelar
              </button>

              {/* <button
                type="button"
                className="px-4 py-2 rounded-lg font-semibold bg-red-600 text-white hover:bg-red-700 shadow transition"
              >
                Excluir
              </button> */}

              <button
                type="submit"
                className="px-4 py-2 rounded-lg font-semibold bg-gradient-to-r from-blue-600 to-cyan-400 text-white hover:bg-blue-700 shadow transition"
              >
                Salvar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
