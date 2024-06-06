import React, { useState, useEffect } from 'react';
import './style.css'

const MudarCorFundo = () => {
    const cores = ['#8B0000', '#1E90FF', '#FF8C00', '#228B22', '#FF69B4', '#483D8B'];

    // Estado para gerenciar a cor atual
    const [corAtual, setCorAtual] = useState(cores[0]);

    // useEffect para alterar a cor de fundo do body
    useEffect(() => {
        document.body.style.backgroundColor = corAtual;
    }, [corAtual]);

    const mudarCor = () => {
        const novaCor = cores[Math.floor(Math.random() * cores.length)];
        setCorAtual(novaCor);
    };

    return (
        <div className="container">
            <h1>Clique no botão para mudar a cor do fundo!</h1>
            <button onClick={mudarCor}>Mudar Cor</button>
            <p>Cor atual: {corAtual}</p>
        </div>
    );
};

export default MudarCorFundo;