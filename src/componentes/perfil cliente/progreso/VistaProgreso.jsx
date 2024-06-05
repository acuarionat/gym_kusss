import React from 'react'
import Dropdown from './Dropdown'
import Tabla from './Tabla'
import BotonCompartir from './BotonCompartir'

const VistaProgreso = () => {
  return (
    <div className='vista-progreso'>
      <Dropdown/>
      <Tabla/>
      <BotonCompartir/>
    </div>
  )
}

export default VistaProgreso