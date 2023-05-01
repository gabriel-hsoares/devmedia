import React from 'react';
import { Link } from 'react-router-dom';
import './estilo.css';

function Topo(){
  function menuShow() {
    let menuMobile = document.querySelector('.mobile-menu');
    if (menuMobile.classList.contains('open')) {
      menuMobile.classList.remove('open');
      document.querySelector('.icon').src = require('../../assets/menu.png');
    } else {
      menuMobile.classList.add('open');
      document.querySelector('.icon').src = require('../../assets/close.png');
    }
  }

  return (
  <header>
    <div className="conteudo-topo limita-largura">
      <Link to='/'><img className="logo-marca" alt='Logomarca Beneficium' src={require('../../assets/logo-vazada.png')}/></Link>

      <Link to='/'><img className='logo-mobile' alt='Logomarca Beneficium' src={require('../../assets/b-beneficium.png')}/></Link>

      <nav className="menu-desktop">
        <Link className="link-navegacao" to='/'>Home</Link>
        <Link className="link-navegacao" to='/produtos'>Produtos</Link>
        <Link className="link-navegacao" to='/sobre'>Sobre</Link>
      </nav>

      <div className="mobile-menu-icon">
        <button onClick={menuShow}><img className='icon' alt='Menu' src={require('../../assets/menu.png')}/></button>
      </div>
    </div>

    <div className="mobile-menu">
      <nav className="nav-mobile">
        <Link className="link-navegacao" to='/'>Home</Link>
        <Link className="link-navegacao" to='/produtos'>Produtos</Link>
        <Link className="link-navegacao" to='/sobre'>Sobre</Link>
      </nav>
    </div>
  </header>
);
}

export default Topo;