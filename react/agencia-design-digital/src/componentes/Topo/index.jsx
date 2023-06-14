import React from 'react';
import './style.css';
import iconeSol from '../../assets/sun.png';
import iconeLua from '../../assets/moon.png';

export default function Topo (props) {

  return (
    <header className={props.ehTemaEscuro ? "topo-modo-escuro" : "topo-modo-claro"}>
      <div className='limita-largura topo'>
        <img className='logo' src={require('../../assets/logo.png')} />


        <button onClick={props.alterarTema} className={props.ehTemaEscuro ? 'btn-modo-escuro' : 'btn-modo-claro'}>
          <img className="moon" src={props.ehTemaEscuro ? iconeSol : iconeLua} />
        </button>
      </div>
    </header>
  );
}