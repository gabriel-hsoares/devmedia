import React from 'react';
import './estilo.css';

const Rodape = () => (
  <footer>
    <div className="rodape-site limita-largura">

      <div className="endereco">
        <h2>ENDEREÇO</h2>
        <p>Av. Dom Luís, 300 - LJ 165</p>
        <p>60165-120, Fortaleza-CE</p>
      </div>

      <div className="contato">
        <h2>CONTATO</h2>
        <p>contato@beneficiumseguros.com.br</p>
        <p>(85) 9 9640-0010</p>
      </div>

      <div className="horarios">
        <h2>HORÁRIOS</h2>
        <p>Segunda à Sexta-Feira</p>
        <p>das 08h às 17h</p>
      </div>
    </div>
    <div className="direito-autoral limita-largura">
      <p>&copy; Todos os direitos reservados.</p>
    </div>
  </footer>
);

export default Rodape;