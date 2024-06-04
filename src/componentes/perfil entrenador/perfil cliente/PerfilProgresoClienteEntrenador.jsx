import React from "react";
import './PerfilProgresoClienteEntrenador.css';
const PerfilProgresoClienteEntrenador = () => {
  return (
      <div className="detalle-progreso">
        <h4>Progreso General</h4>
        <div className="grafica">
          <div className="valor-progreso"><p>50%</p></div>
        </div>
      </div>
  );
};

export default PerfilProgresoClienteEntrenador;
