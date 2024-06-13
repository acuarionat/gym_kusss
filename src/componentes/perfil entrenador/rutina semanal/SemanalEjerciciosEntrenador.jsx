import "./SemanalEjerciciosEntrenador.css";
import React from "react";

function SemanalEjercicios({ rutina }) {
  return (
    <div className="dias">
      <div className="nombreDia">
        <p className="textoSemanal">{rutina.dia}</p>
      </div>
      <div className="botonesEjercicios">
        <button className="botonEjer">{rutina.area}</button>
        <button className="botonCalorias">{rutina.calorias}</button>
      </div>
    </div>
  );
}

export default SemanalEjercicios;
