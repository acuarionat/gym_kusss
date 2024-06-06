import React from "react";
import './TarjetaCliente.css';
import DescripcionCliente from "./DescripcionCliente";

const TarjetaCliente = ({ cliente }) => {
  return (
    <div className="tarjeta">
      <DescripcionCliente cliente={cliente} />
    </div>
  );
};

export default TarjetaCliente;