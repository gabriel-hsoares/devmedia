import React from 'react';
import './estilo.css';

import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';

const PaginaHome = () => (
  <div>
    <Topo />
    <main>
      {/* SEÇÃO CAPA */}
      <section className="secao-capa">
        <div className="titulo limita-largura">
          <p>Serviços de</p>
          <h1>Consultoria</h1>
          <p>em Seguros, Saúde e Consórcio.</p>
        </div>
      </section>

      {/* NOSSOS DIFERENCIAIS */}
      <section className="secao-diferenciais">
        
        <div className="limita-largura">
          <div className='subtitulo'><h2><span>Nossos</span> diferenciais</h2>
          </div>
          <div className="diferenciais">
            <div>
              <img alt='Imagem Estrela' src='assets/destaque.png'/>
            </div>

            <div>
              <div className="diferenca">
                <img alt='Imagem Checkbox' src='assets/check.png'/>
                <p>Atendimento personalizado</p>
              </div>
              <div className="diferenca">
                <img alt='Imagem Checkbox' src='assets/check.png'/>
                <p>Consultoria gratuita</p>
              </div>
              <div className="diferenca">
                <img alt='Imagem Checkbox' src='assets/check.png'/>
                <p>Flexibilidade na sua cotação</p>
              </div>
              <div className="diferenca">
                <img alt='Imagem Checkbox' src='assets/check.png'/>
                <p>equipe capacitada</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO MISSÃO, VISÃO, VALORES */}
      <section className="secao-missao">

        <div className="limita-largura">
          <div className='subtitulo'><h2><span>Missão</span>, visão e valores</h2>
          </div>
          <div className="cards">
            <div className="card">
              <h3>Missão</h3>
              <img alt='Imagem Missão' src='assets/missao.png'/>
              <p>Oferecer aos nossos clientes as melhores soluções para seu gerenciamento de risco e planejamento financeiro.</p>
            </div>
            <div className="card">
              <h3>Visão</h3>
              <img alt='Imagem Visão' src='assets/visao.png'/>
              <p>Estar em destaque dentre as corretoras do Ceará, sendo referência no Setor de Pessoas: Vida, Previdência e Saúde.</p>
            </div>
            <div className="card">
              <h3>Valores</h3>
              <img alt='Imagem Valor' src='assets/valor.png'/>
              <p>Garantir ao cliente a proteção, segurança e dignidade necessárias durante todas as fases de sua vida.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SEÇÃO PARCEIROS */}
      <section className='secao-parceiros'>
        <div className='limita-largura'>
          <div className='subtitulo'><h2><span>Nossos</span> parceiros</h2>
          </div>

          <div className='todos-parceiros'>
            <img alt='Imagem Icatu Seguros' src='assets/icatu.png'/>
            <img alt='Imagem Bradesco Seguros' src='assets/bradesco.png'/>
            <img alt='Imagem SulAmérica Seguros' src='assets/sulamerica.png'/>
            <img alt='Imagem Amil' src='assets/amil.png'/>
            <img alt='Imagem Unimed' src='assets/unimed.png'/>
            <img alt='Imagem Hapvida' src='assets/hapvida.png'/>
            <img alt='Imagem Bancorbrás' src='assets/bancorbras.png'/>

            <img alt='Imagem Tokio Marine' src='assets/tokio.png'/>
            <img alt='Imagem Porto Seguro' src='assets/porto.png'/>
            <img alt='Imagem Essor Seguros' src='assets/essor.png'/>
            <img alt='Imagem Allianz Seguros' src='assets/allianz.png'/>
            <img alt='Imagem Berkley' src='assets/berkley.png'/>
            <img alt='Imagem Pottencial' src='assets/pottencial.png'/>
            <img alt='Imagem Akad' src='assets/akad.png'/>
          </div>

        </div>
      </section>
      
      {/* SEÇÃO ENDEREÇO */}
      <section className="secao-endereco limita-largura">
        <div className="subtitulo">
          <h2><span>Como</span> Chegar?</h2>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3981.352557173851!2d-38.5015281243899!3d-3.733111396240813!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x7c74863b6aed93b%3A0x50bd7cbc9358b310!2sAv.%20Dom%20Lu%C3%ADs%2C%20300%20-%20Aldeota%2C%20Fortaleza%20-%20CE%2C%2060160-230!5e0!3m2!1spt-BR!2sbr!4v1681869456331!5m2!1spt-BR!2sbr" width="1024" title='pin' height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </section>

    </main>
    <Rodape />
  </div>
);

export default PaginaHome;