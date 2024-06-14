import React from "react";
import "./TarjetaEjercicio.css";

const TarjetaEjercicioResistencia = ({ ejercicior }) => {
  return (
    <div>
      <div className="ejercicio">
      <div className="imagen-ejer"></div>
        <div className="descripcion-ejer">
          <h4>{ejercicior.nombre}</h4>
          <p className='musculo'>Musculo Principal: {ejercicior.musculo_principal}</p>
          <p className="dif">{ejercicior.dificultad}</p>
        </div>
      </div>
    </div>
  );
};

export default TarjetaEjercicioResistencia;
