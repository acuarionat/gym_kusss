import React from 'react';
import './BarraTransparente.css';
import SideBar from '../general/Slide Bar/SideBar';

const BarraTransparente = () => {
  return (
    <div className='headDetalleTransparente'>
      <input className='icoDetalleTransparente' type="checkbox" id='btnMenu' />
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

export default BarraTransparente;
