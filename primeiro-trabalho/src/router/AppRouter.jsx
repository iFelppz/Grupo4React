import Carros from "../pages/Carros";
import MudarCorFundo from "../pages/CorFundo";
import Usuarios from "../pages/Usuarios";
import UsuariosBuscar from "../pages/UsuariosBuscar";
import UsuariosPost from "../pages/UsuariosPost";
import { Route, Routes } from "react-router-dom";

function AppRouter() {
    return (
      <Routes>
        <Route path="/" element={<Usuarios />} />
        <Route path="/buscar" element={<UsuariosBuscar />} />
        <Route path="/cadastrar" element={<UsuariosPost />} />
        <Route path="/carros" element={<Carros />} />
        {/* <Route path="*" element={<Erro/>}/> */}
        <Route path="/mudarpag" element={<MudarCorFundo />} />
      </Routes>
    );
  }
  
  export default AppRouter;