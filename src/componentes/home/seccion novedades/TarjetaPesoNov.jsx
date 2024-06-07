import React from 'react'
import './TarjetaPesoNov.css'
import TextoPeso from './TextoPeso'
import GenerosPeso from './GenerosPeso'

const TarjetaPesoNov = () => {
    return (
       <div className='NovPeso1'>
            <TextoPeso/>
            <GenerosPeso/>
            <img src="../public/imagenes/entre.jpg" alt="" className='comidaAli' />
       </div>
    );
  };
  
  export default TarjetaPesoNov;