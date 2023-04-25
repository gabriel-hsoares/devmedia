import React from 'react';

import './estilo.css';
import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';

const PaginaSobre = () => (
  <div>
    <Topo />
    <main>
      {/* SEÇÃO CAPA SOBRE */}
      <section className="secao-capa-sobre">
        <div className="titulo-produtos limita-largura">
          
          <h1>Quem somos?</h1>
          
        </div>
      </section>

      {/* SEÇÃO QUEM SOMOS */}
      <section className="quem-somos">
        <div className="limita-largura">
          <div className='subtitulo'><h2><span>Conheça</span> quem somos</h2>
          </div>
          <div className="paragrafos">
            <p>Contando com um Gestor que está há mais de 30 anos no mercado, possuímos a qualidade, eficiência e seriedade necessárias para prestação de serviços de Consultoria nos ramos de Seguros, Saúde e Consórcio.</p>
            <p>Trazemos aos nossos clientes, através de uma equipe altamente qualificada, as melhores soluções em diversos tipos de produtos, sejam eles Empresariais, Familiares ou Individuais.</p>
            <p>Estamos comprometidos em fornecer um serviço excepcional e atendimento personalizado a todos os nossos clientes. Nós valorizamos a confiança que nos é depositada e trabalhamos incansavelmente para garantir que suas necessidades sejam atendidas e suas expectativas superadas.</p>
          </div>
        </div>
      </section>
    </main>   
    <Rodape />
  </div>
);

export default PaginaSobre;