import React from 'react';
import './style.css';
import Logo from '../../assets/logo.png';
import iconeFacebook from '../../assets/facebook.png';
import iconeTwitter from '../../assets/twitter.png';
import iconeLinkedin from '../../assets/linkedin.png';
import iconeDribble from '../../assets/dribble.png';
import iconeBehance from '../../assets/behance.png';
import iconeGooglePlus from '../../assets/google-plus.png';

export default function Rodape (props) {

  return (
    <footer className={props.ehTemaEscuro ? 'rodape-modo-escuro' : 'rodape-modo-claro'}>

      <img src={Logo} />

      <p className='paragrafo'>Ajudamos a criar uma personalidade digital construindo sua marca no ambiente online utilizando estratégias, ferramentas e tecnologias personalizadas.</p>

      <div className='icones-rodape'>
        <img src={iconeFacebook} />
        <img src={iconeTwitter} />
        <img src={iconeLinkedin} />
        <img src={iconeDribble} />
        <img src={iconeBehance} />
        <img src={iconeGooglePlus} />
      </div>

      <div>
        <p className='copyright'>Copyright 2023 &copy; <span>Gabriel Soares</span></p>
      </div>

    </footer>
  );
}