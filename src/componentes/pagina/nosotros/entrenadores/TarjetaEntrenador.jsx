import React from 'react';
import './TarjetaEntrenador.css';

const TarjetaEntrenador = ({ coach, onClick }) => {
  return (
    <div className="card" onClick={onClick}>
      <img src={coach.image} alt={coach.name} className="card-images" />
      <div className="card-info">
        <h3>{coach.name}</h3>
        <p>{coach.title}</p>
      </div>
    </div>
  );
};

export default TarjetaEntrenador;