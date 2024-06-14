import React from "react";
import "./CabezaCargarProgreso.css";
import { useNavigate } from "react-router-dom";
const CabezaCargarProgreso = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="headRutinas">
      <button className="goback" onClick={handleGoBack}>
        <img
          className="icoDetalle"
          src={"imagenes/FlechaIzquierda.png"}
          alt="Flecha Atras"
        />
      </button>
      <p className="tituloRutinas">CARGAR PROGRESO</p>
      <div className="icoRutinas" />
    </div>
  );
};

export default CabezaCargarProgreso;