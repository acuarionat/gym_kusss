import React from "react";
import "./Boton.css";

const BotonEditarRutina = ({cliente}) => {
  return (
    <div>
      <NavLink to={`/rutina_cliente?id=${cliente.id}`}>
      <button className="boton">CARGAR RUTINA</button>
      </NavLink>
    </div>
  );
};

export default BotonEditarRutina;
