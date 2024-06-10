import React from 'react'
import './DescripcionCliente.css'

const DescripcionCliente = ({cliente}) => {
  return (
    <div className='descripcion'>
        <img 
        className="imagen"
        src={cliente.foto}
        alt={`avatar de ${cliente.name}`}
      />
        <h4>{cliente.name}</h4>
        <p>
          Objetivo: {cliente.objetivo}
        </p>
    </div>
  )
}

export default DescripcionCliente