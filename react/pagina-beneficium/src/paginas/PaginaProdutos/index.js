import React from 'react';

import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';

const PaginaProdutos = () => (
  <div>
    <Topo />
    <main>

      {/* SEÇÃO PRODUTOS */}
      <section>
        <div className="limita-largura">
          <div className="card">
            <h1>olá olá</h1>
          </div>
        </div>
      </section>
    </main>
    <Rodape />
  </div>
);

export default PaginaProdutos;