import React from 'react';
import './topo.css';
import Logo from '../../assets/iplus_solution_logo.png';
import WhatsApp from '../../assets/whatsapp_icon.png';

export default function Topo() {
  return (
    <header>
      <div className='topo limita-largura-topo'>

        <img className='logo' src={Logo} alt='logo iplus' />
        <button className='contato-wpp' type='submit'>
          <img className='wpp elemento' src={WhatsApp} alt='logo whatsapp' />
          <p className='elemento'>Fale Conosco</p>
        </button>

      </div>
    </header>
  );
}