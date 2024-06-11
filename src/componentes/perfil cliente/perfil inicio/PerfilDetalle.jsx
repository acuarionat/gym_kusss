import React from "react";
import "./PerfilDetalle.css";
import { NavLink } from "react-router-dom";

const PerfilDetalle = () => {
  return (
    <div className="tarjeta-detalle">
      <div className="imagenes">
        <NavLink className={"navegacion"} to={"/editar_perfil"}>
          <button className="editar">
            <img src={"/imagenes/editar.png"} alt="editar" />
          </button>
        </NavLink>
        <button className="perfil">
          <img src={"/imagenes/foto-perfil.png"} alt="foto-perfil" />
        </button>
        <button className="cerrar">
          <img src={"/imagenes/cerrar.png"} alt="cerrar" />
        </button>
      </div>
      <div className="detalle">
        <h2>JuanDeLaCruz</h2>
        <p>juan.delacruz@gmail.com</p>
      </div>
    </div>
  );
};

export default PerfilDetalle;
