import React from "react";
import "./Boton.css";
import { NavLink } from "react-router-dom";

const BotonRutina = ({cliente}) => {
  return (
    <div>
       <NavLink to={`/rutina_cliente?id=${cliente.id}`}>
      <button className="boton">ADMINISTRAR RUTINA</button>
      </NavLink>
    </div>
  );
};

export default BotonRutina;
