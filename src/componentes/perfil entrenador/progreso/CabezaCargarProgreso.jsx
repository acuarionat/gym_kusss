import React from "react";
import "./CabezaCargarProgreso.css";
import { useNavigate } from "react-router-dom";

const CabezaCargarProgreso = ({ contentHeader }) => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="progress-header">
      <button className="goback" onClick={handleGoBack}>
        <img src={"imagenes/FlechaIzquierda.jpg"} alt="Flecha Atras" />
      </button>
      <div className="progress-title-container">
        <p className="progress-title">{contentHeader}</p>
      </div>
    </div>
  );
};

export default CabezaCargarProgreso;
