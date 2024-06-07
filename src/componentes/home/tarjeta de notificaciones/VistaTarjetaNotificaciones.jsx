import React from 'react'
import './VistaTarjetaNotificaciones.css'
import TextoNotificacion from './TextoNotificacion'
import BotonMasInformacion from './BotonMasInformacion'
import BotonMasTarde from './BotonMasTarde'
/* import LogoImagen from  './LogoImagen' */


const VistaTarjetaNotificaciones = () => {
    return (
        <div className='TarjetaNotificacion'>
            <TextoNotificacion/>
            <BotonMasInformacion/>
            <BotonMasTarde/>
            {/* <LogoImagen/> */}
        </div>

    );
  };
  
  export default VistaTarjetaNotificaciones;