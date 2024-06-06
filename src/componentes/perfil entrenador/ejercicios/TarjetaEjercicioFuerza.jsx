import React from "react";
import "./TarjetaEjercicio.css";
const TarjetaEjercicioFuerza = ({ ejerciciof }) => {
  return (
    <div>
      <div className="ejercicio">
        <img
          className="imagen-ejer"
          src={ejerciciof.imagen}
          alt={`avatar de ${ejerciciof.nombre}`}
        />
        <div className="descripcion-ejer">
          <h4>{ejerciciof.nombre}</h4>
          <p className='musculo'>Musculo Principal: {ejerciciof.musculo_principal}</p>
          <p className="dif">{ejerciciof.dificultad}</p>
        </div>
      </div>
    </div>
  );
};

export default TarjetaEjercicioFuerza;
