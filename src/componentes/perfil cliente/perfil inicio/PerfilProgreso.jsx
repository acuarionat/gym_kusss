import React from "react";
import './PerfilProgreso.css';
const PerfilProgreso = () => {
  return (
      <div className="detalle-progreso">
        <h4>Progreso General</h4>
        <div className="grafica">
          <span className="valor-progreso">0%</span>
        </div>
      </div>
  );
};

export default PerfilProgreso;
