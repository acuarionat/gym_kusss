import React from 'react'
import './VistaSeccionNovedades.css'
import TituloNovedades from './TituloNovedades'
import TextoAlimentacion from "./TextoAlimentacion"

const VistaSeccionNovedades = () => {
    return (
        <div className='SeccionNovedades'>
            <TituloNovedades/>
            <TextoAlimentacion/> 
        </div>

    );
  };
  
  export default VistaSeccionNovedades;