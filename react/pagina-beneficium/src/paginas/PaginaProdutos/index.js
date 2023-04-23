import React from 'react';

import './estilo.css';
import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';

const PaginaProdutos = () => (
  <div>
    <Topo />
    <main>

      {/* SEÇÃO CAPA PRODUTOS */}
      <section className="secao-capa-produtos">
        <div className="titulo-produtos limita-largura">
          
          <h1>Nossos produtos</h1>
          
        </div>
      </section>

      {/* SEÇÃO NOSSOS PRODUTOS */}
      <section className="secao-produtos">
      <div className="limita-largura">
          <div className='subtitulo'><h2><span>Conheça</span> nossos produtos</h2>
          </div>
          <div className="cards">
            <div className="card">
              <h3>vida individual</h3>
              <img alt='Imagem Missão' src='assets/vida-individual.png'/>
              <p>Gerenciamento de risco com coberturas e capitais segurados ideais para o seu momento de vida.</p>
              <a href='https://wa.me/5585996400010?text=Ol%C3%A1%2C+Gabriel%21+Gostaria+de+falar+sobre+Seguro+de+Vida+Individual.'><button type='submit' className="btn">Solicitar cotação</button></a>
            </div>
            <div className="card">
              <h3>vida em grupo</h3>
              <img alt='Imagem Visão' src='assets/vida-em-grupo.png'/>
              <p>A proteção e segurança que seus funcionários e familiares merecem nos momentos em que mais precisarem.</p>
              <a href='https://wa.me/5585996400010?text=Ol%C3%A1%2C+Gabriel%21+Gostaria+de+falar+sobre+Seguro+de+Vida+em+Grupo.'><button type='submit' className="btn">Solicitar cotação</button></a>
            </div>
            <div className="card">
              <h3>saúde</h3>
              <img alt='Imagem Valor' src='assets/saude.png'/>
              <p>Solução para atender todas as suas necessidades em todas as situações. O melhor plano para sua necessidade.</p>
              <a href='https://wa.me/5585996400010?text=Ol%C3%A1%2C+Gabriel%21+Gostaria+de+falar+sobre+Plano%2FSeguro+Sa%C3%BAde.'><button type='submit' className="btn">Solicitar cotação</button></a>
            </div>
            <div className="card">
              <h3>Consórcio</h3>
              <img alt='Imagem Valor' src='assets/consorcio.png'/>
              <p>A forma mais segura de alanvacar seu patrimônio a juros baixos. Nosso diferencial é controlar sua contemplação.</p>
              <a href='https://wa.me/5585996400010?text=Ol%C3%A1%2C+Gabriel%21+Gostaria+de+falar+sobre+Cons%C3%B3rcio.'><button type='submit' className="btn">Solicitar cotação</button></a>
            </div>
            <div className="card">
              <h3>Automóvel</h3>
              <img alt='Imagem Valor' src='assets/auto.png'/>
              <p>O melhor Seguro para o seu meio de locomoção: seu automóvel. As melhores opções do mercado.</p>
              <a href='https://wa.me/5585996400010?text=Ol%C3%A1%2C+Gabriel%21+Gostaria+de+falar+sobre+Seguro+Auto.'><button type='submit' className="btn">Solicitar cotação</button></a>
            </div>
            <div className="card">
              <h3>Residencial</h3>
              <img alt='Imagem Valor' src='assets/residencial.png'/>
              <p>Seguros Residenciais para proteger o seu lar e de sua família. As melhores Assistências 24h.</p>
              <a href='https://wa.me/5585996400010?text=Ol%C3%A1%2C+Gabriel%21+Gostaria+de+falar+sobre+Seguro+Residencial.'><button type='submit' className="btn">Solicitar cotação</button></a>
            </div>
            <div className="card">
              <h3>Empresa</h3>
              <img alt='Imagem Valor' src='assets/empresa.png'/>
              <p>Seguros empresariais de acordo com o perfil da sua empresa. O ideal para proteger estrutura e conteúdo.</p>
              <a href='https://wa.me/5585996400010?text=Ol%C3%A1%2C+Gabriel%21+Gostaria+de+falar+sobre+Seguro+Empresarial.'><button type='submit' className="btn">Solicitar cotação</button></a>
            </div>
            <div className="card">
              <h3>Transporte</h3>
              <img alt='Imagem Valor' src='assets/transport.png'/>
              <p>Seguro de Transporte para proteger os insumos de sua empresa enquanto transportados.</p>
              <a href='https://wa.me/5585996400010?text=Ol%C3%A1%2C+Gabriel%21+Gostaria+de+falar+sobre+Seguro+Transporte.'><button type='submit' className="btn">Solicitar cotação</button></a>
            </div>
            <div className="card">
              <h3>Previdência Privada</h3>
              <img alt='Imagem Valor' src='assets/previdencia.png'/>
              <p>A construção de patrimônio no longo prazo com as melhores taxas de administração do mercado.</p>
              <a href='https://wa.me/5585996400010?text=Ol%C3%A1%2C+Gabriel%21+Gostaria+de+falar+sobre+Previd%C3%AAncia+Privada.'><button type='submit' className="btn">Solicitar cotação</button></a>
            </div>
            <div className="card">
              <h3>Bike</h3>
              <img alt='Imagem Valor' src='assets/bike.png'/>
              <p>O melhor seguro para proteger o seu na hora de praticar o seu hobby favorito: pedalar! Conheça as opções.</p>
              <a href='https://wa.me/5585996400010?text=Ol%C3%A1%2C+Gabriel%21+Gostaria+de+falar+sobre+Seguro+Bike.'><button type='submit' className="btn">Solicitar cotação</button></a>
            </div>
            <div className="card">
              <h3>Não encontrou?</h3>
              <img alt='Imagem Valor' src='assets/quest.png'/>
              <p>Não encontrou o que precisa? Entre em contato conosco e consulte-nos: vamos solucionar seu problema.</p>
              <a href='https://wa.me/5585996400010?text=Ol%C3%A1%2C+Gabriel%21+N%C3%A3o+encontrei+o+que+precisava+no+site%2C+pode+me+ajudar%3F'><button type='submit' className="btn">Solicitar cotação</button></a>
            </div>
          </div>
        </div>
      </section>
    </main>
    <Rodape />
  </div>
);

export default PaginaProdutos;