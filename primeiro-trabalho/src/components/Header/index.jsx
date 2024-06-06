import { Link } from "react-router-dom"
import './style.css';

function Header() {
  return (
    <header>
        <h2>
          Grupo 4
        </h2>
        <div className="menu">
            <Link to={"/"}>Usuarios</Link>
            <Link to={"/cadastrar"}>Cadastrar</Link>
            <Link to={"/buscar"}>Buscar</Link>
            <Link to={"/carros"}>Carros</Link>
            <Link to={"/mudarpag"}>MudarCor</Link>
        </div>   
    </header>
  )
}

export default Header