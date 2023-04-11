import React from 'react';
import './style.css';

const Rodape = () => (
  <footer>
    <div className="rodape-site limita-largura">
      <img src='assets/logo.png'/>

      <div className="endereco">
        <h2>ENDEREÇO</h2>
        <p>Av. Washington Soares, 85</p>
        <p>60320-350, Fortaleza-CE</p>
      </div>

      <div className="contato">
        <h2>CONTATO</h2>
        <p>E-mail: contato@gelateria.com</p>
        <p>Telefone: (85) 9 9818-1082</p>
      </div>

      <div className="horarios">
        <h2>HORÁRIOS</h2>
        <p>Todos os dias da semana</p>
        <p>das 08h às 22h</p>
      </div>
    </div>
    <div className="direito-autoral limita-largura">
      <p>Gelateria, orgulhosamente desenvolvido por &copy;Gabriel Soares.</p>
    </div>
  </footer>
);

export default Rodape;