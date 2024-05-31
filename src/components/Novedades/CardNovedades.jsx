import React from 'react';
import "./CardNovedades.css";
import Contenido from './Contenido';
const CardNovedades = () => {
  return (
    <div className="cardno">
      <div className='bloque'></div>
      <div className='contenido'>
        <Contenido />
      </div>
    </div>
  );
}

export default CardNovedades;
