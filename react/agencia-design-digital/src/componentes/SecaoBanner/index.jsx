import React from 'react';
import './style.css';

export default function SecaoBanner (props) {

  return (
    <section className='secao-banner'>
      <div id='imagemDeFundo' className={props.ehTemaEscuro ? 'fundo-modo-escuro' : 'fundo-modo-claro'}>
        
      </div>
      <div className="texto-banner">
        <p>branding / ui / ux / tecnologia</p>
        <h2>Agência de Branding</h2>
        <span>e design digital</span>
      </div>
    </section>
  );
}