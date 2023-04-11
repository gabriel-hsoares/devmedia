// import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Topo = () => (
  <header>
    <div className="topo limita-largura">
      <Link to='/'><img src="assets/logo.png"/></Link>
  
      <nav>
        <Link className="link-topo" to='/'>Home</Link>
        <Link className="link-topo" to='/sobre'>Sobre</Link>
        <Link className="link-topo" to='/sabores'>Sabores</Link>
      </nav>
    </div>
  </header>
);

export default Topo;