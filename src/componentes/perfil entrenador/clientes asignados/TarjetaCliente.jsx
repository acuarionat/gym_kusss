import React from "react";
import './TarjetaCliente.css'
const TarjetaCliente = ({cliente}) => {
  return (
    <div className="tarjeta">
      <img
        className="imagen"
        src={cliente.imagen}
        alt={`avatar de ${cliente.name}`}
      />
      <div className="descripcion">
        <h2>{cliente.name}</h2>
        <p>
          Objetivo: {cliente.objetivo}
        </p>
      </div>
    </div>
  );
};

export default TarjetaCliente;
