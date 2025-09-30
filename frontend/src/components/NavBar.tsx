import { ArchiveBoxIcon } from "@heroicons/react/24/solid";
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
      {/* Logo */}
      <div className="flex items-center gap-2">
        <ArchiveBoxIcon className="w-8 h-8 text-white" />
        <span className="text-xl font-bold">Sistema de Estoque</span>
      </div>

      {/* Links */}
      <div className="flex items-center gap-6 text-lg">
        <Link to="/dashboard" className="hover:text-gray-200 transition-colors">
          Dashboard
        </Link>
        <Link to="/users" className="hover:text-gray-200 transition-colors">
          Usuários
        </Link>
        <button
          onClick={handleLogout}
          className="bg-red-500 hover:bg-red-600 px-3 py-1 rounded transition-colors"
        >
          Logout
        </button>
      </div>
    </nav>
  );
}
