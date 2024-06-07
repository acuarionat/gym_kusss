import React from 'react'
import './VistaTarjetaNotificaciones.css'
import TextoNotificacion from './TextoNotificacion'
import BotonMasInformacion from './BotonMasInformacion'
import BotonMasTarde from './BotonMasTarde'


const VistaTarjetaNotificaciones = () => {
    return (
        <div className='TarjetaNotificacion'>
            <TextoNotificacion/>
            <BotonMasInformacion/>
            <BotonMasTarde/>
        </div>

    );
  };
  
  export default VistaTarjetaNotificaciones;