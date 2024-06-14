import React from "react";
import "./PerfilDetalleEntrenador.css";
import { NavLink } from "react-router-dom";

const PerfilDetalleEntrenador = ({ entrenador }) => {
  return (
    <div className="tarjeta-detalle">
      <div className="imagenes">
        <div className="editar"></div>
        <img
          className="perfil"
          src={entrenador.foto}
          alt={`avatar de ${entrenador.nombre}`}
        />
         <NavLink to='/'>
        <button className="cerrar">
          <img src={"/imagenes/cerrar.png"} alt="cerrar" />
        </button>
        </NavLink>
      </div>
      <div className="detalle">
        <h2>{entrenador.nombre}</h2>
        <p> {entrenador.email} </p>
      </div>
    </div>
  );
};

export default PerfilDetalleEntrenador;
