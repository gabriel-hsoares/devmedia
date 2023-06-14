import React from 'react';
import './style.css';

export default function Card (props) {

  return (
    <div id='card' className={props.ehTemaEscuro ? 'card-modo-escuro' : 'card-modo-claro'}>
      <p className='primeiro-paragrafo'>{ props.periodo }</p>
      <h4>{ props.servico }</h4>
      <p className='segundo-paragrafo'>{ props.empresa }</p>
      <p>{ props.descricao }</p>
    </div>
  );
}