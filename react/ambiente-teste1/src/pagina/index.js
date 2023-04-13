import React, { useState } from 'react';

export default function ExibeTecnologia() 
{
  const [ tecnologia, setTecnologia ] = useState('JavaScript');

  function trocarTecnologia() {
    const novaTecnologia = ( tecnologia == 'JavaScript' ) ? 'React' : 'JavaScript';
    setTecnologia(novaTecnologia);
  }

  return (
    <div>
      <h1>Tecnologia:</h1>
      <h2>{ tecnologia }</h2>

      <button onClick = { trocarTecnologia } >
        Trocar tecnologia
      </button>

    </div>
  );
}