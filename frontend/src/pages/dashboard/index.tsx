import Layout from "../../components/Layout";
import Navbar from "../../components/NavBar";

export default function Dashboard() {
    const nome = localStorage.getItem("nome")

  return (
    <div>
      <Navbar />
      <Layout>
      <div className="flex items-center justify-center h-screen">
        <h1 className="text-3xl font-bold text-white">Bem-vindo ao Estoque, {nome} 🚀</h1>
      </div>
      </Layout>
    </div>
  );
}
