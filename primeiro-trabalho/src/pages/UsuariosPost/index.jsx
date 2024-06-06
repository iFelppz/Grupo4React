import React, { useState } from 'react'
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';


function UsuariosPost() {
    const [name, setName] = useState("");
    const [createPost, setCreatePost] = useState(null);
    const [enviado, setEnviado] = useState(false);
    const [cpf, setCpf] = useState("");
    const [email, setEmail] = useState("");

  
    const handleSubmit = (e) => {
      e.preventDefault();
      const newPost = {
        name: name,
        cpf: cpf,
        email: email
      };
  
      axios
        .post("https://6660f88e63e6a0189fe812de.mockapi.io/user", newPost)
        .then((response) => {
          console.log(response.data);
          setCreatePost(response.data);
        })
        .catch(() => {
          console.error("Requisição com problemas....");
        });
      setEnviado(true);
    }
    
    const handleEmail = (email, e)=>{
        
        console.log("Email,",email)

      }

  
    return (
      <div className="container">
        <h1>Cadastro de Usuario</h1>
        {enviado ? (
          <div className="alert alert-primary" role="alert">
            Enviado com sucesso
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6">
                <label htmlFor="name">name:</label>
                <input
                  type="text"
                  className="my-3 form-control"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                <label htmlFor="cpf">cpf:</label>
                <input
                  type="text"
                  className="my-3 form-control"
                  id="cpf"
                  value={cpf}
                  onChange={(e) => setCpf(e.target.value)}
                  required
                />
                 <label htmlFor="email">email:</label>
                 <input
                  type="email"
                  className="my-3 form-control"
                  id="email"
                  value={email}
                  onChange={(e)=> {
                    console.log(setEmail(e.target.value))
                  }}
                  required
                />
              </div>
            </div>
            <button className="btn btn-primary" type="submit">Enviar</button>
          </form>
        )}

        




      </div>

      




    );
}

export default UsuariosPost