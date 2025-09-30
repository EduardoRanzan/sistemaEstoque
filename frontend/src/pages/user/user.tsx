import { useEffect, useState } from "react";
import Navbar from "../../components/NavBar";
import Table from "../../components/Table";
import { useParams } from "react-router-dom";
import Unit from "../../components/Unit";
import Layout from "../../components/Layout";

type User = {
  id: string;
  nome: string;
  email: string;
  createAt: string;
  updateAt: string;
};

export default function User() {
  const { id } = useParams<{ id: string }>();
  const [user, setUsers] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const resp = await fetch(`${import.meta.env.VITE_API_BACK}users/${id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });

        if (!resp.ok) throw new Error("Usuário não encontrado");

        const data = await resp.json();
        setUsers(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchUser();
  }, [id]);

  if (loading) return <p>Carregando...</p>;

  if (!user) return <p>Produto não encontrado</p>;

  return (
    <div>
      <Navbar />
      <Layout>
          <div className="flex item-center justify-center h-full">
            <div className="w-full max-w-7xl h-full rounded-xl bg-white p-8 shadow-md">
                          
            </div>
        </div>
      </Layout>
    </div>
  );
}
