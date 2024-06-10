import React from "react";
import "./TarjetaCliente.css";
import DescripcionCliente from "./DescripcionCliente";
import { NavLink } from "react-router-dom";

const TarjetaCliente = ({ cliente }) => {
  return (
    <NavLink className="nav-link" to={`/perfil_cliente_entrenador?id=${cliente.id}`} >
      <div className="tarjeta">
        <DescripcionCliente cliente={cliente}/>
      </div>
    </NavLink>
  );
};

export default TarjetaCliente;
