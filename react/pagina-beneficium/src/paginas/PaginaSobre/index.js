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
            <p>Somos uma empresa de Consultoria nos ramos: Seguros, Saúde e Consórcio. Somos uma empresa de Consultoria nos ramos: Seguros, Saúde e Consórcio. Somos uma empresa de Consultoria nos ramos: Seguros, Saúde e Consórcio. Somos uma empresa de Consultoria nos ramos: Seguros, Saúde e Consórcio. </p>
          </div>
        </div>
      </section>
    </main>   
    <Rodape />
  </div>
);

export default PaginaSobre;