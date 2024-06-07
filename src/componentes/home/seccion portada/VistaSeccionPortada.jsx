import React from 'react'
import './VistaSeccionPortada.css'
import ImagenSeccionPortada from './ImagenSeccionPortada'
import CabeceraPortada from './CabeceraPortada'
import TextoCabecera from './TextoCabecera'

const VistaSeccionPortada = () => {
    return (
        <div className='PortadaHome'>
            <CabeceraPortada/>
            <ImagenSeccionPortada/>
            <TextoCabecera/>

        </div>

    );
  };
  
  export default VistaSeccionPortada;