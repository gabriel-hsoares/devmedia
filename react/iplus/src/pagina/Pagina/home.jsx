import React from 'react';
import './home.css';

import Check from '../../assets/check.png';
import Quebrado from '../../assets/iphone-quebrado.png';
import Money from '../../assets/money.png';
import Garantia from '../../assets/garantia.png';
import Tempo from '../../assets/relogio.png';


export default function Pagina() {
  return(
    <div>
      <section className='secao-banner'>
        <div className='banner limita-largura'>
          
          <div className='texto-banner'>
            <h3>Celular <span>quebrou?</span></h3>
            <h2>Troque sua tela hoje mesmo!</h2>
    
            <hr />
    
            <div className='vantagens'>
              <img src={Check} alt='check' />
              <p>30 minutos para troca da tela e/ou bateria</p>
            </div>
    
            <div className='vantagens'>
              <img src={Check} alt='check' />
              <p>Atendimento personalizado</p> 
            </div>
    
            <button className='conhecer-servicos'>Conheça nossos serviços</button>
    
          </div>
  
          <div id='imgFundo'>
            <img src={Quebrado} alt='iphone quebrado' />
          </div>
        </div>
      </section>
  
      <section className='secao-diferenciais'>
        <h1>Nossos diferenciais</h1>
        <div className='cards limita-largura'>
    
          <div className='card'>
            <h4>Preço justo</h4>
            <img src={Money} alt='Cifrão' />
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          </div>
  
          <div className='card'>
            <h4>Garantia do serviço</h4>
            <img src={Garantia} alt='Garantia' />
            <p>bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb</p>
          </div>
  
          <div className='card'>
            <h4>Rapidez na entrega</h4>
            <img src={Tempo} alt='Relógio' />
            <p>aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</p>
          </div>
  
        </div>
      </section>
    </div>
  );
}