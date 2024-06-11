import React from "react";
import "./CabeceraEditarPerfil.css";
import { useNavigate } from "react-router-dom";
const CabeceraEditarPerfil = () => {
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
      <p className="tituloRutinas">EDITAR PERFIL</p>
      <div className="icoRutinas" />
    </div>
  );
};

export default CabeceraEditarPerfil;
