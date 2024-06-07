import React from 'react'
import './VistaSeccionNovedades.css'
import TituloNovedades from './TituloNovedades'
import TarjetaAlimentacionNov from './TarjetaAlimentacionNov'

const VistaSeccionNovedades = () => {
    return (
        <div className='SeccionNovedades'>
            <TituloNovedades/>
            <TarjetaAlimentacionNov/>  
        </div>

    );
  };
  
  export default VistaSeccionNovedades;