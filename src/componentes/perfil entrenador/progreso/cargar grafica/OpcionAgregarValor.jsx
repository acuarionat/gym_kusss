import React from "react";
import BotonAgregarValor from "./BotonAgregarValor";
import "./OpcionAgregarValor.css";
import { useNavigate } from "react-router-dom";

const OpcionAgregarValor = ({ idCliente, selectedProgreso, selectedOption }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (idCliente && selectedProgreso && selectedOption) {
      navigate('/cargar_progreso', { state: { idCliente, selectedProgreso, selectedOption } });
    } else {
      alert("Seleccione una opción de progreso y una opción específica.");
    }
  };

  return (
    <div className="opcion-agregar-valor" onClick={handleClick}>
      <span className="texto">Agregar Nuevo Valor</span>
      <BotonAgregarValor />
    </div>
  );
};

export default OpcionAgregarValor;
