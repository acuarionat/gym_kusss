import React from "react";
import "./Boton.css";
import { NavLink } from "react-router-dom";
const BotonAdministrarClientes = () => {
  return (
    <div className="boton-contenedor">
      <NavLink className={"navegacion"} to={`/clientes_asignados`}>
        <button className="boton">ADMINISTRAR CLIENTES</button>
      </NavLink>
    </div>
  );
};

export default BotonAdministrarClientes;
