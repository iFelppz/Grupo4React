import axios from 'axios';
import React, { useEffect, useState } from 'react'


function UsuariosBuscar() {
    const [usuarios, setUsuarios] = useState([]);
    const [id, setId] = useState(''); // Define o estado 'id'

  useEffect(() => {
    axios
      .get("https://6660f88e63e6a0189fe812de.mockapi.io/user")
      .then((response) => {
        setUsuarios(response.data);
      })
      .catch((error) => console.error("Erro ao fazer a requisição"));
  }, []);




    const usuariosFiltrados = usuarios.filter(usuario => 
        usuario.id === id
      );

   return(
       <div>
       <label className="form-label">Buscar por ID</label>
    <input
    type="text"
    className="form-control"
    value={id}
    onChange={(e) => setId(e.target.value)}
    />
    {usuariosFiltrados.length === 0 ? (
        <p>Não há usuarios disponíveis</p>
    ) : (
        usuariosFiltrados.map((usuario) => (
            <p key={usuario.id}>
          {usuario.id}: {usuario.name} / {usuario.email}
        </p>
      ))
    )}
    </div>
   )
}


export default UsuariosBuscar