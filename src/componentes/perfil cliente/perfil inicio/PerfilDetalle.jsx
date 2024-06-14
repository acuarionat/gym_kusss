import React from "react";
import "./PerfilDetalle.css";
import { NavLink } from "react-router-dom";

const PerfilDetalle = ({perfil}) => {
  return (
    <div className="tarjeta-detalle">
      <div className="imagenes">
        <NavLink className={"navegacion"} to={"/editar_perfil"}>
          <button className="editar">
            <img src={"/imagenes/editar.png"} alt="editar" />
          </button>
        </NavLink>
        <img
            className="perfil"
            src={perfil.foto}
            alt={`avatar de ${perfil.name}`}
          />
          <NavLink to='./'>
        <button className="cerrar">
          <img src={"/imagenes/cerrar.png"} alt="cerrar" />
        </button>
        </NavLink>
      </div>
      <div className="detalle">
      <h2>{perfil.name}</h2>
          <p> {perfil.email} </p>
      </div>
    </div>
  );
};

export default PerfilDetalle;
