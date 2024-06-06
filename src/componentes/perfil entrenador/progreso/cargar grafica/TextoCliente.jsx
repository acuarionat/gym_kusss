import React from 'react'
import './TextoCliente.css';

const TextoCliente = ({ cliente }) => {
  return (
    <div className='title'>
      <h2>Cliente: <span>{cliente ? cliente.name : "Cargando..."}</span></h2>
    </div>
  )
}

export default TextoCliente;
