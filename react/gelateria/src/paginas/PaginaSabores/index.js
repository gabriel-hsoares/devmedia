import React from 'react';
import Topo from '../../componentes/topo';
import Rodape from '../../componentes/rodape';

import './style.css';

const Sabores = () => (
  <div>
    <Topo />
    
    <main>
      <section className="secao-banner-sabores">
        <div className="texto-banner">
          <h1>nossos sabores</h1>
        </div>
      </section>

      <section className="secao-sabores-sorvete limita-largura">
        <h2>sabores de sorvete</h2>
        <div className="sabores">
          <div className="card-sabor">
            <img src='assets/sabor-oreo.png' />
            <h3>Sorvete de Oreo</h3>
            <p>Delicioso sorvete sabor Oreo. Uma explosão de sabor.</p>
          </div>
          <div className="card-sabor">
            <img src='assets/sabor-pistache.png'/>
            <h3>Sorvete de Pistache</h3>
            <p>Cremoso sorvete sabor Pistache com pedacinhos de semente.</p>
          </div>
          <div className="card-sabor">
            <img src='assets/sabor-cookies-avela.png'/>
            <h3>Sorvete de Cookies & Avelã</h3>
            <p>O nosso melhor sorvete. Você vai adorar o sabor.</p>
          </div>
          <div className="card-sabor">
            <img src='assets/sorbet-kiwi.png'/>
            <h3>Sorvete de Kiwi</h3>
            <p>Delicioso e refrescante sorvete sabor Kiwi. Rico em Vitamina C.</p>
          </div>
          <div className="card-sabor">
            <img src='assets/sorbet-morango.png'/>
            <h3>Sorvete de Morango</h3>
            <p>Sorvete de morango gourmet. Tradicional e saboroso.</p>
          </div>
          <div className="card-sabor">
            <img src='assets/sorbet-limao.png'/>
            <h3>Sorvete de Limão Siciliano</h3>
            <p>O incrível sorvete gourmet de limão siciliano vai te encantar.</p>
          </div>
        </div >
      </section>
    </main>



    <Rodape />
  </div>
);

export default Sabores;