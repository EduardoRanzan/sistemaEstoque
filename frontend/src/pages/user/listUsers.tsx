import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar";
import Table from "../../components/Table";
import { PlusCircleIcon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";

type User = {
  id: string;
  nome: string;
  email: string;
  createAt: string;
  updateAt: string;
};

export default function ListUser() {
  const [users, setUsers] = useState<User[]>([]);
  const [erro, setErro] = useState("");
  const [loading, setLoading] = useState(false);

  async function getUsers() {
    setLoading(true);
    setErro("");

    try {
      const resp = await fetch(`${import.meta.env.VITE_API_BACK}users`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      if (!resp.ok) throw new Error("Erro ao carregar usuários");

      const data = await resp.json();
      setUsers(data);
    } catch (err: any) {
      setErro(err.message);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    getUsers();
  }, []);

  const columns = [
    { key: "id", label: "ID" },
    { key: "nome", label: "Nome" },
    { key: "createAt", label: "Criado em" },
    { key: "updateAt", label: "Atualizado em" },
  ] as { key: keyof User; label: string }[];

  return (
    <div>
      <Navbar />
      <div className="p-6">
        <div className="flex">
          <h2 className="mb-4 text-2xl font-bold mr-2">Usuários</h2> 
          <Link to="./new"><PlusCircleIcon className="w-10 h-10 text-black"></PlusCircleIcon></Link>
        </div>
        {erro && <div className="mb-4 rounded bg-red-100 p-2 text-red-700">{erro}</div>}
        {loading ? <p>Carregando...</p> : <Table columns={columns} data={users} />}
      </div>
    </div>
  );
}
