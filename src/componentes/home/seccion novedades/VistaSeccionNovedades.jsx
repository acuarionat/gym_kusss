import React from 'react'
import './VistaSeccionNovedades.css'
import TituloNovedades from './TituloNovedades'
import TarjetaAlimentacionNov from './TarjetaAlimentacionNov'
import TarjetaMental from './TarjetaMental'
import TarjetaPesoNov from './TarjetaPesoNov' 
const VistaSeccionNovedades = () => {
    return (
        <div className='SeccionNovedades'>
            <TituloNovedades/>
            <TarjetaAlimentacionNov/>
            <TarjetaMental/>
            <TarjetaPesoNov/>
        </div>

    );
  };
  
  export default VistaSeccionNovedades;