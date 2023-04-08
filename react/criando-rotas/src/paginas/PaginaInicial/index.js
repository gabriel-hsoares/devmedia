import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const PaginaInicial = () => (
  <div className="conteudo">
    <h1>Escolha seu caminho em JavaScript</h1>

    <div className="conteudo-opcoes">
      <Link className="opcao-frontend" to='/front-end'>Front-End</Link>
      <Link className="opcao-backend" to='/back-end'>Back-End</Link>
    </div>
  </div>
);

export default PaginaInicial;