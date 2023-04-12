import React from 'react';
import './estilo.css';

export default function Pagina () {
  return (
    <div className="home">
      <div className="div1">
        <h1>texto 1</h1>
        <h1>texto 2</h1>

      </div>
      <div className="div2">
        <h2>Faça seu login</h2>
        <div className="login">
          <p>Usuário</p>
          <input placeholder='Digite seu usuário'></input>
        </div>
        <div className="senha">
          <p>Senha</p>
          <input type='password' placeholder='Digite sua senha'></input>
        </div>
      </div>
    </div>
  );
}