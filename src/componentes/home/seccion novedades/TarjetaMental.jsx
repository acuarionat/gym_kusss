import React from 'react'
import './TarjetaMental.css'
import TextoMental from './TextoMental'
import GeneroMental from './GeneroMental'

const TarjetaMental = () => {
    return (
       <div className='NovMental1'>
            <TextoMental/>
            <GeneroMental/>
            <img src="../public/imagenes/cerebro.jpeg" alt="" className='comidaAli' />
       </div>
    );
  };
  
  export default TarjetaMental;


