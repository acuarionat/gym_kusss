import React from 'react'
import TextoCliente from './TextoCliente'
import Formulario from './Formulario'
import BotonGuardar from './BotonGuardar'
import './VistaCargarProgreso';
import NavBarPerfilEntrenador from '../../general/NavBarPerfilEntrenador';
import CabezaDetallesEjercicio from '../../perfil cliente/detalles de ejercicios/import \'./CabezaDetallesEjercicio.css\' import FlechaIzquierda from \'/imagenes/FlechaIzquierda.png\'  function CabezaDetallesEjercicio() {     return (         <div className=\'headDetalle\'>             <img className=\'icoDetalle\' src={FlechaIzquierda} alt="Flecha Atras" />             <p className=\'tituloDetalles\'>FLEXIONES</p>             <div className=\'icoDetalle\' />         </CabezaDetallesEjercicio';
const VistaCargarProgreso = () => {
  return (
    <div className='vista-cargar-progreso'>
      <CabezaDetallesEjercicio/>
      <TextoCliente/>
      <Formulario/>
      <BotonGuardar/>
      <NavBarPerfilEntrenador/>
    </div>
  )
}

export default VistaCargarProgreso