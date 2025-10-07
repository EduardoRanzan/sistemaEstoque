import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar";
import Table from "../../components/Table";

type Product = {
  id: string;
  nome: string;
  descricao: string;
  preco: number;
  quantidade: number;
  createAt: string;
  updateAt: string;
};

export default function Product() {
  const [products, setProduct] = useState<Product[]>([]);
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  async function getProducts() {
    setLoading(true);
    setErro("");

    try {
      const resp = await fetch(`${import.meta.env.VITE_API_BACK}products`, {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });

      if (!resp.ok) {
        throw new Error("Erro ao carregar usuários");
      }

      const data = await resp.json();
      setProduct(data);
    } catch (err: any) {
      setErro(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  const columns = [
    { key: "id", label: "ID" },
    { key: "nome", label: "Nome" },
    { key: "createAt", label: "Criado em" },
    { key: "updateAt", label: "Atualizado em" },
  ] as { key: keyof Product; label: string }[];


  return (
    <div>
      <Navbar />
      <div className="p-6">
        <h1 className="mb-4 text-2xl font-bold">Proasddutos</h1>
        {erro && <div className="mb-4 rounded bg-red-100 p-2 text-red-700">{erro}</div>}
        {loading ? <p>Carregando...</p> : <Table columns={columns} data={products} />}
      </div>
    </div>
  );
}
