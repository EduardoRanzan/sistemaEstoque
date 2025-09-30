import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar";

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
      const resp = await fetch("http://localhost:5050/users", {
        headers: {
          "Authorization": `Bearer ${localStorage.getItem("token")}`
        }
      });

      if (!resp.ok) {
        throw new Error("Erro ao carregar usuários");
      }

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

  return (
    <div>
      <Navbar />
        <div className="p-6">
          <h1 className="mb-4 text-2xl font-bold">Lista de Usuários</h1>

          {erro && <div className="mb-4 rounded bg-red-100 p-2 text-red-700">{erro}</div>}

          {loading ? (
            <p>Carregando...</p>
          ) : (
            <table className="w-full border-collapse rounded shadow overflow-hidden">
              <thead className="bg-blue-600 text-white">
                <tr>
                  <th className="px-4 py-2">ID</th>
                  <th className="px-4 py-2">Nome</th>
                  <th className="px-4 py-2">Email</th>
                  <th className="px-4 py-2">Criado Em</th>
                  <th className="px-4 py-2">Atualizado Em</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.id} className="even:bg-gray-100">
                    <td className="px-4 py-2">{user.id}</td>
                    <td className="px-4 py-2">{user.nome}</td>
                    <td className="px-4 py-2">{user.email}</td>
                    <td className="px-4 py-2">{user.createAt}</td>
                    <td className="px-4 py-2">{user.updateAt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
    </div>
  );
}
