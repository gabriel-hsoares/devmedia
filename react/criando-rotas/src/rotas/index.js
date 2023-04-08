import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import PaginaInicial from '../paginas/PaginaInicial';
import PaginaBackEnd from '../paginas/PaginaBackEnd';
import PaginaFrontEnd from '../paginas/PaginaFrontEnd';

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<PaginaInicial/>}/>
      <Route path='/front-end' element={<PaginaFrontEnd/>}/>
      <Route path='/back-end' element={<PaginaBackEnd/>}/>
    </Routes>
  </BrowserRouter>
);

export default Rotas;