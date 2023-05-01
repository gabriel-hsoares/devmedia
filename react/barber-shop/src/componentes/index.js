import React, { useState } from 'react';
import './estilo.css';

export default function Topo() {

  const [ ehTemaEscuro, setEhTemaEscuro ] = useState(false);

  const alterarTema = () => {
    setEhTemaEscuro(!ehTemaEscuro);
  }

  return (
  <div>
    <header className={ehTemaEscuro ? 'modo-escuro' : 'modo-claro'}>
      <div className="topo-pagina limita-largura">
        <div className="logomarca">
          <img alt='Logo Barbearia' className="imagem-logo" src='assets/barbearia-logo.png'/>
        </div>
        <div>
          <button onClick={alterarTema} className={ehTemaEscuro ? 'modo-escuro' : 'modo-claro'}>
            <img alt='Imagem Lua/Sol' className="imagem-lua" src={ehTemaEscuro ? 'assets/sun.png' : 'assets/moon.png'}/>
            {ehTemaEscuro ? 'Light' : 'Dark'}
          </button>
        </div>
      </div>
    </header>

    <main className={ehTemaEscuro ? 'modo-escuro' : 'modo-claro'}>
      <section>
       <div className="imagem-fundo">

       </div>
      </section>

      <section className="bemvindo limita-largura">
        <h1>Bem vindo a Barber Shop</h1>
        <p className="negrito">Nossa barbearia sempre oferece profissionais de qualidade e estamos prontos para lidar com suas maiores expectativas.</p>
        <p>Nossos serviços são dedicados ao seu sucesso pessoal. Aqui temos uma equipe premiada que demonstrou o talento de mestres barbeiros em vários concursos de estilo. Deixe nosso barbeiro ser seu estilista pessoal e você nunca ficará desapontado.</p>
        <p className="paragrafo-especial">S. Kelly</p>
      </section>
    </main>
  </div>
  );
}
