import React from 'react';
import { Link } from 'react-router-dom';
import './estilo.css';

const Topo = () => (
  <header>
    <div className="conteudo-topo limita-largura">
      <Link to='/home'><img alt='Logomarca Beneficium' src={require('../../assets/logo-vazada.png')}/></Link>

      <nav>
        <Link className="link-navegacao" to='/home'>Home</Link>
        <Link className="link-navegacao" to='/produtos'>Produtos</Link>
        <Link className="link-navegacao" to='/sobre'>Sobre</Link>
      </nav>
    </div>
  </header>
);

export default Topo;