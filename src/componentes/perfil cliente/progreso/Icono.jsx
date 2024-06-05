import React from 'react';
import './VistaProgreso.css';
import iconoCompartir from '/home/jorian/component-project/component-project/public/imagenes/compartir.png';

const Icono = () => {
  return (
    <div className="icono">
      <img src={iconoCompartir} alt="Icono Compartir" width="24px" height="24px" />
    </div>
  );
};

export default Icono;
