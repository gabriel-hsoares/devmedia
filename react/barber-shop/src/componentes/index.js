import React from 'react';
import './estilo.css';

const Topo = () => (
  <header>
    <div className="topo-pagina limita-largura">
      <div className="logomarca">
        <img className="imagem-logo" src={require('../assets/barbearia-logo.png')}/>
      </div>
      <div className="botao">
        <img className="imagem-lua" src={require('../assets/moon.png')}/>
        <p>Dark</p>
      </div>
    </div>
  </header>
);

export default Topo;