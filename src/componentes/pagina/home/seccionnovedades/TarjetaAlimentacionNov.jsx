import React from 'react'
import './TarjetaAlimentacionNov.css'
import TextoAlimentacion from './TextoAlimentacion'
import GenerosAlim from './GenerosAlim'
import ImagenNovedad from './ImagenNovedad'


const TarjetaAlimentacionNov = () => {
    return (
       <div className='NovAlimentacion1'>
            <TextoAlimentacion/>
            <GenerosAlim/>
            <ImagenNovedad/>
       </div>
    );
  };
  
  export default TarjetaAlimentacionNov;