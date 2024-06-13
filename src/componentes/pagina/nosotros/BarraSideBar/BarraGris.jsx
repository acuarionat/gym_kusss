import React from 'react';
import './BarraGris.css';
import SideBar from '../../../general/Slide Bar/SideBar';

const BarraGris = () => {
  return (
    <div className='barraGrisContainer'>
      <input className='icoDetalleGris' type="checkbox" id='btnMenu' />
      <label htmlFor='btnMenu'>
        <img 
          className='imagenMenu' 
          src={"/imagenes/Menu.png"} 
          alt="Barras de Navegacion" 
        />
      </label>
      <SideBar />
    </div>
  );
}

export default BarraGris;

