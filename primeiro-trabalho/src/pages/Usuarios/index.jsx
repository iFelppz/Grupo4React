
import axios from "axios";
import { useEffect, useState } from "react";

function Usuarios() {
    const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    axios
      .get("https://6660f88e63e6a0189fe812de.mockapi.io/user")
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((error) => console.error("Erro ao fazer a requisição"));
  }, []);

  return (
    <div>
      <h1>Listagem de Usuarios</h1>
      <ul>
        {usuarios.map((usuario) => (
          <li key={usuario.id}>
            Nome:{usuario.name},
            <p>Email:{usuario.email}</p></li> 
        ))}
      </ul>
    </div>
  );
}

export default Usuarios