import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaHome from '../paginas/PaginaHome';
import PaginaProdutos from '../paginas/PaginaProdutos';
import PaginaSobre from '../paginas/PaginaSobre';

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<PaginaHome/>}/>
      <Route path='/produtos' element={<PaginaProdutos/>}/>
      <Route path='/sobre' element={<PaginaSobre/>}/>
    </Routes>
  </BrowserRouter>
);

export default Rotas;