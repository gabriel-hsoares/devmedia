import './style.css'
import React, { useState } from 'react';
import { Donut } from 'react-awesome-shapes/dist/shapes/donut';

export default function Modal() { 
   return(
    <div className='tela'>
      <Donut
          color="#f43f5e"
          size="100px"
          width={['20px', '20px', '30px', '30px']}
          zIndex={2}
        />
    </div>
  )
}