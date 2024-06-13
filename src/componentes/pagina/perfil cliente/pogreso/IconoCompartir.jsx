import React from 'react';
import './IconoCompartir.css';
import iconoCompartir from '/imagenes/compartir.png';

const IconoCompartir = () => {
  return (
    <div className="icono">
      <img src={iconoCompartir} alt="Icono Compartir" width="24px" height="24px" />
    </div>
  );
};

export default IconoCompartir;