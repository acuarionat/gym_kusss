import React, { useEffect, useState } from "react";
import "./VistaHorario.css";
import CabezaHorario from "./CabezaHorario";
import ImagenComb from "./ImagenComb";
const VistaHorario = () => {
  return (
    <div className="vista-horario">
      <CabezaHorario />
        <ImagenComb />
      </div>
  );
};

export default VistaHorario;
