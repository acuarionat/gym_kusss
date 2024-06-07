import React from 'react'
import './TarjetaAlimentacionNov.css'
import TextoAlimentacion from './TextoAlimentacion'
import GenerosAlim from './GenerosAlim'

const TarjetaAlimentacionNov = () => {
    return (
       <div className='NovAlimentacion1'>
            <TextoAlimentacion/>
            <GenerosAlim/>
            <img src="../public/imagenes/comida.jpg" alt="" className='comidaAli' />
       </div>
    );
  };
  
  export default TarjetaAlimentacionNov;