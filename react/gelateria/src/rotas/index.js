import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Sobre from '../paginas/PaginaSobre/';
import Home from '../paginas/PaginaHome/';
import Sabores from '../paginas/PaginaSabores/';

const Rotas = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path='/' element={<Home/>}/>
      <Route path='/sobre' element={<Sobre/>}/>
      <Route path='sabores' element={<Sabores/>}/>
    </Routes>
  </BrowserRouter>
);

export default Rotas;