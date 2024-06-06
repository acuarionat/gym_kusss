import React from 'react'
import Dropdown from './Dropdown'
import Tabla from './Tabla'
import OpcionAgregarValor from './OpcionAgregarValor'
import TextoCliente from './TextoCliente'
import NavBarPerfilEntrenador from '../../general/NavBarPerfilEntrenador'
import CabezaDetallesEjercicio from '../../perfil cliente/detalles de ejercicios/import \'./CabezaDetallesEjercicio.css\' import FlechaIzquierda from \'/imagenes/FlechaIzquierda.png\'  function CabezaDetallesEjercicio() {     return (         <div className=\'headDetalle\'>             <img className=\'icoDetalle\' src={FlechaIzquierda} alt="Flecha Atras" />             <p className=\'tituloDetalles\'>FLEXIONES</p>             <div className=\'icoDetalle\' />         </CabezaDetallesEjercicio'

const VistaProgresoEntrenador = () => {
  return (
    <div className='vista-progreso-entrenador'>
      <CabezaDetallesEjercicio/>
      <TextoCliente/>
      <Dropdown/>
      <Tabla/>
      <OpcionAgregarValor/>
      <NavBarPerfilEntrenador/>
    </div>
  )
}

export default VistaProgresoEntrenador