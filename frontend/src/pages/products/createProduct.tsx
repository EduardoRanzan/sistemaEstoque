import { useState } from "react";
import Navbar from "../../components/NavBar";
import { useNavigate } from "react-router-dom";

export default function CreateProduct() {
    const navigate = useNavigate();
    
    const [nome, setNome] = useState("");
    const [descricao, setDescricao] = useState("");
    const [preco, setPreco] = useState("");
    const [quantidade, setQuantidade] = useState("");

    const novoProduto = {nome, descricao, preco, quantidade};

    async function handleSave(){
        try {
            const resp = await fetch(`${import.meta.env.VITE_API_BACK}products`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify(novoProduto),
      });

      if (!resp.ok) throw new Error("Erro ao salvar usuário");

      navigate("/products");
      alert("Produto Cadastrado!")

    } catch (err: any) {
        alert("Erro ao salvar produto")
    }
  }


  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <Navbar />
      <div className="flex justify-center px-4 mt-10">
        <div className="w-9/10 rounded-xl bg-white p-8 shadow-xl">
          <h2 className="mb-6 text-2xl font-bold text-gray-800 text-justify">
            Novo Produto
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
              <label htmlFor="descricao" className="mb-1 text-sm font-medium text-gray-700">
                Descrição
              </label>
              <input
                id="descricao"
                type="text"
                value={descricao}
                onChange={(e) => setDescricao(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/3"
                placeholder="Digite o e-mail"
                required
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="preco" className="mb-1 text-sm font-medium text-gray-700">
                Preço
              </label>
              <input
                id="preco"
                type="number"
                value={preco}
                onChange={(e) => setPreco(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/3"
                placeholder="Digite a senha"
                required
              />
            </div>

             <div className="flex flex-col">
              <label htmlFor="quantidade" className="mb-1 text-sm font-medium text-gray-700">
                Quantidade
              </label>
              <input
                id="quantidade"
                type="number"
                value={quantidade}
                onChange={(e) => setQuantidade(e.target.value)}
                className="border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/3"
                placeholder="Digite a senha"
                required
              />
            </div>

             <div className="flex justify-end gap-3 mt-6">
              <button
                type="button"
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
