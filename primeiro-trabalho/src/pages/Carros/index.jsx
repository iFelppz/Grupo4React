import React, { useState } from 'react';

function Carros() {
    const [marca, setMarca] = useState('');
    const carros = [
      { id: 1, marca: 'Toyota', modelo: 'Corolla' },
      { id: 2, marca: 'Honda', modelo: 'Civic' },
      { id: 3, marca: 'Ford', modelo: 'Mustang' },
      { id: 4, marca: 'Chevrolet', modelo: 'Camaro' },
      { id: 5, marca: 'Nissan', modelo: 'Altima' },
    ];
  
    const carrosFiltrados = carros.filter(carro =>
      carro.marca.toLowerCase().includes(marca.toLowerCase())
    );
  
    return (
      <div className="container mt-4">
        <div className="mb-3">
          <label className="form-label">Buscar por Marca</label>
          <input
            type="text"
            className="form-control"
            value={marca}
            onChange={(e) => setMarca(e.target.value)}
          />
        </div>
        <div>
          {carrosFiltrados.length === 0 ? (
            <p>Não há carros disponíveis</p>
          ) : (
            carrosFiltrados.map((carro, i) => (
              <p key={i}>
                {i + 1}: {carro.marca} - {carro.modelo}
              </p>
            ))
          )}
        </div>
      </div>
    );
  }

  export default Carros