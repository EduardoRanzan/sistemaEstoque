import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import ListUser from "./pages/user/listUsers";
import ListProducts from "./pages/products/listProducts"
import User from "./pages/user/User";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/users" element={<ListUser />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/products" element={<ListProducts />} />
      </Routes>
    </BrowserRouter>
  );
}
