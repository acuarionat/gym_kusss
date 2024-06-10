import React from 'react';
import './BarraGris.css';

const BarraGris = () => {

  return (
    <div className='headDetalleGris'>
      <button id="BotonMenu" className='icoDetalleGris'>
        <img 
          className='imagenMenu' 
          src={"/imagenes/Menu.png"} 
          alt="Barras de Navegacion" 
        />
      </button>
    </div>
  );
}

export default BarraGris;
