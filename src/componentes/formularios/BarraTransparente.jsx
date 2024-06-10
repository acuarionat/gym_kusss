import React from 'react';
import './BarraTransparente.css';

const BarraTransparente = () => {
  return (
    <div className='headDetalleTransparente'>
      <button id="BotonMenu" className='icoDetalleTransparente'>
        <img 
          className='imagenMenu' 
          src={"/imagenes/Menu.png"} 
          alt="Barras de Navegacion" 
        />
      </button>
    </div>
  );
}

export default BarraTransparente;
