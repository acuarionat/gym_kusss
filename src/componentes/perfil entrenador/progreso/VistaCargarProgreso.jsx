import React from 'react'
import TextoCliente from './TextoCliente'
import Formulario from './Formulario'
import BotonGuardar from './BotonGuardar'
import './VistaCargarProgreso';
const VistaCargarProgreso = () => {
  return (
    <div className='vista-cargar-progreso'>
      <TextoCliente/>
      <Formulario/>
      <BotonGuardar/>
    </div>
  )
}

export default VistaCargarProgreso