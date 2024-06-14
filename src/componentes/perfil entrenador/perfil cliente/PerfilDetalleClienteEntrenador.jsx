import React from "react";
import "./PerfilDetalleClienteEntrenador.css";
import { useNavigate } from "react-router-dom";

  const PerfilDetalleClienteEntrenador = ({ cliente }) => {
    const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
    return (
      <div className="tarjeta-detalle">
        <div className="imagenes">
          <button className="flecha" onClick={handleGoBack}>
            <img src={"/imagenes/FlechaIzquierda.png"} alt="flecha" />
          </button>
          <img
            className="perfil"
            src={cliente.foto}
            alt={`avatar de ${cliente.name}`}
          />
          <div className="editar"></div>
        </div>
        <div className="detalle">
          <h2>{cliente.name}</h2>
          <p> {cliente.email} </p>
        </div>
      </div>
    );
  };

export default PerfilDetalleClienteEntrenador;
