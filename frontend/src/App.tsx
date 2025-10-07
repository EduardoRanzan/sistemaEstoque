import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import ListUser from "./pages/user/listUsers";
import ListProducts from "./pages/products/listProducts"
import User from "./pages/user/user";
import CreateUser from "./pages/user/createUser";
import CreateProduct from "./pages/products/createProduct";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {
          /*
            Home
          */
        }
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        {
          /*
            Usuários
          */
        }
        <Route path="/users" element={<ListUser />} />
        <Route path="/users/:id" element={<User />} />
        <Route path="/users/new" element={<CreateUser />}/>
        {
          /*
            Produtos
          */
        }      
        <Route path="/products" element={<ListProducts />} />
        <Route path="/products/new" element={<CreateProduct/>}/>
      </Routes>
    </BrowserRouter>
  );
}
