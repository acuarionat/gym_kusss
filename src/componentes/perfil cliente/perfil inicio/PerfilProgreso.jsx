import React from "react";
import './PerfilProgreso.css';
const PerfilProgreso = () => {
  return (
      <div className="detalle-progreso">
        <h4>Progreso General</h4>
        <div className="grafica-progreso-general">
          <div className="valor-progreso"><p>50%</p></div>
        </div>
      </div>
  );
};

export default PerfilProgreso;
