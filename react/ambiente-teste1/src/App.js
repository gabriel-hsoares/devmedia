import './App.css';
import Modal from './componentes/modal';
import React, { useState } from 'react';

function App() {
  const [openModal, setOpenModal] = useState(false);

  return (
      <div>
        <button onClick={() => setOpenModal(true)} >abrir</button>
        <Modal isOpen={openModal} setOpenModal={() => setOpenModal(!openModal)} 
                precobateria="R$ 499" precotela="R$ 499"></Modal>
      </div>

  );
}

export default App;
