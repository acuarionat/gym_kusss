import React from 'react';
import './TarjetaSalasZonas.css';

const TarjetaSalasZonas = ({ imagen, onClick }) => {
  return (
    <div className="card-salas" onClick={onClick}>
      <h3 className="card-titl">{imagen.title}</h3>
      <img src={imagen.image} alt={imagen.title} className="card-image" />
    </div>
  );
};

export default TarjetaSalasZonas;
