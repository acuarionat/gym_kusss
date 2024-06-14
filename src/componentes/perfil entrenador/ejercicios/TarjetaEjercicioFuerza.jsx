import React from "react";
import "./TarjetaEjercicio.css";
import { NavLink } from "react-router-dom";
const TarjetaEjercicioFuerza = ({ ejerciciof, onCardClick }) => {
  const handleClick = () => {
    onCardClick(ejerciciof.id);
  };
  return (
      <NavLink to='/editar_ejercicio_rutina'>
      <div className="ejercicio" onClick={handleClick}>
        <img
          className="imagen-ejer"
          src={ejerciciof.imagen}
          alt={`avatar de ${ejerciciof.nombre}`}
        />
        <div className="descripcion-ejer">
          <h4>{ejerciciof.nombre}</h4>
          <p className="musculo">
            Musculo Principal: {ejerciciof.musculo_principal}
          </p>
          <p className="dif">{ejerciciof.dificultad}</p>
        </div>
      </div>
      </NavLink>
  );
};

export default TarjetaEjercicioFuerza;
