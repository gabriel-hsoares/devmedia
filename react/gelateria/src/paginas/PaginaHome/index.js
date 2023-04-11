import React from 'react';
import Topo from '../../componentes/topo';
import Rodape from '../../componentes/rodape';

import './style.css';

const Home = () => (
  <div>
    <Topo />
    
    <main>
      {/* SEÇÃO BANNER */}
      <section className="secao-banner">
        <div className="texto-banner">
          <h1>SORVETE ARTESANAL</h1>
        </div>
      </section>
  
  
      {/* SEÇÃO SABORES */}
      <section className="secao-sabores">
        <img src='assets/banner-sabores.jpg'/>
  
        <div className="texto-sabores">
          <h2>NOSSOS SABORES</h2>
          <span>Novos e deliciosos!</span>
  
          <p>Sorvete bom é aquele feito com os melhores ingredientes! Aqui na gelateria todos os nossos produtos são naturais, à base de frutas e sem nenhum conservante! Também temos opções sem lactose e sem açúcar. Venha conhecer e perceber que tem como o sorvete ser delicioso e saudável ao mesmo tempo!</p>
        </div>
      </section>
  
  
      {/* SEÇÃO EVENTOS */}
      <section className="secao-eventos">
        <div className="texto-eventos">
          <h2>NOSSOS EVENTOS</h2>
          <span>Delícias em sorvete!</span>
  
          <p>Mais do que uma sorveteria, uma extensão da sua casa! Estamos aqui prontinhos para te atender e oferecer os melhores eventos com os melhores sorvetes da sua vida! Venha nos conhecer e passar um tempinho aqui com a gente.</p>
        </div>
    
          <img src='assets/eventos-image.jpg'/>
  
      </section>
  
  
      {/* SEÇÃO SOBRE */}
      <section className="secao-sobre">

  
        <img src='assets/banner-sobre.png'/>
  
        <div className="texto-sobre">
          <h2>SOBRE NÓS</h2>
          <span>Alegria em cada casquinha!</span>
  
          <p>Venha tomar o melhor sorvete da região aqui com a gente! Nós estamos há anos no mercado produzindo o que há de melhor para o nosso cliente e você não pode ficar de fora dessa. Venha nos fazer uma visita e aproveite o melhor atendimento e o melhor sorvete da cidade.</p>
        </div>

      </section>
  
      <Rodape />
    </main>
  </div>
);

export default Home;