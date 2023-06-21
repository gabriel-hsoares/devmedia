import './style.css'
import React, { useState } from 'react';
import Close from '../assets/btn_close.png'

export default function Modal( {isOpen, setOpenModal, children}, props ) {

  if (isOpen) {  
    return(

    
    
      <div className='tela'>
        <div className='modal'>
    
          <div className='icone_close'>
            <button onClick={setOpenModal} className='close'><img src={Close} /></button>
          </div>
    
    
    
          <table>
            <caption>Valores</caption>
            <thead>
              <tr>
                <th>Bateria</th>
                <th>Tela</th>
              </tr>
            </thead>
    
            <tbody>
              <tr>
                <td>{props.precobateria}</td>
                <td>{props.precotela}</td>
              </tr>
            </tbody>
    
          </table>
  
          <button className='chamada_wpp' type='submit'>Eu quero!</button>
    
        </div>
      </div>
    )
  }
}