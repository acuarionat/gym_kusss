import React from 'react'
import Dropdown from './Dropdown'
import Tabla from './Tabla'
import BotonCompartir from './BotonCompartir'
import NavBarPerfil from '../../general/NavBarPerfil'
const VistaProgreso = () => {
  return (
    <div className='vista-progreso'>
      <Dropdown/>
      <Tabla/>
      <BotonCompartir/>
      <NavBarPerfil/>
    </div>
  )
}

export default VistaProgreso