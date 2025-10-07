import { ArchiveBoxIcon, ArrowLeftStartOnRectangleIcon, DocumentChartBarIcon, UsersIcon, PercentBadgeIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("nome");
    navigate("/");
  };

  return (
    <nav className="w-full flex justify-between items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-400 text-white shadow-md">
      <div className="flex items-center gap-2">
        <ArchiveBoxIcon className="w-8 h-8 text-white" />
        <span className="text-xl font-bold">Estoque</span>
      </div>

      <div className="flex-1 flex justify-center gap-6 text-lg font-bold">
        <Link to="/dashboard" className="hover:text-cyan-200 transition-colors flex items-center">
          <DocumentChartBarIcon className="size-7"/> Dashboard's
        </Link>
        <Link to="/users" className="hover:text-cyan-200 transition-colors flex items-center">
          <UsersIcon className="size-7"/> Usuários
        </Link>
        <Link to="/products" className="hover:text-cyan-200 transition-colors flex items-center">
          <PercentBadgeIcon className="size-7"/> Produtos
        </Link>
      </div>

      <button onClick={handleLogout}>
        <ArrowLeftStartOnRectangleIcon className="size-9 text-red-600" />
      </button>
    </nav>

  );
}
