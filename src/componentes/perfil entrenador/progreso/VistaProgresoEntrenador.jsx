import React from 'react'
import Dropdown from './Dropdown'
import Tabla from './Tabla'
import OpcionAgregarValor from './OpcionAgregarValor'
import TextoCliente from './TextoCliente'

const VistaProgresoEntrenador = () => {
  return (
    <div className='vista-progreso-entrenador'>
      <TextoCliente/>
      <Dropdown/>
      <Tabla/>
      <OpcionAgregarValor/>
    </div>
  )
}

export default VistaProgresoEntrenador