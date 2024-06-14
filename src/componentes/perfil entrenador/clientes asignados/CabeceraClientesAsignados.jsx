import React from "react";
import "./CabeceraClientesAsignados.css";
import { useNavigate } from "react-router-dom";
const CabeceraClientesAsignados = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="headClientesEn">
      <button className="goback" onClick={handleGoBack}>
        <img className="icoDetalleEn" src={'imagenes/FlechaIzquierda.png'} alt="Flecha Atras" />
      </button>
      <p className="tituloEntrenador">CLIENTES ASIGNADOS</p>
    </div>
  );
};

export default CabeceraClientesAsignados;
