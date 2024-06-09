import React from 'react';
import './BarraTransparente.css';

const BarraTransparente = () => {
  const handleClick = () => {
    // Aquí puedes agregar la lógica para el botón, como abrir un menú lateral
    console.log("Botón de menú clickeado");
  };

  return (
    <div className='headDetalleTransparente'>
      <img 
        className='icoDetalleGris' 
        src={"/imagenes/Menu.png"} 
        alt="Tres barras" 
        onClick={handleClick} 
      />
    </div>
  );
}

export default BarraTransparente;
