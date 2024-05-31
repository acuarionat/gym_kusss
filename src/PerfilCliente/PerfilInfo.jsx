import React from "react";
import "./PerfilInfo.css";

const PerfilInfo = () => {
  return (
    <div className="informacion">
      <div className="detalle">
        <div className="titulo">
          <h4>Informacion General</h4>
        </div>
        <div className="parrafo">
          <p>
            <span className="rojo">Meta &nbsp;&nbsp;&nbsp;&nbsp;: </span>{" "}
            &nbsp;Perder peso
          </p>
          <p>
            <span className="rojo">Peso &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;: </span>{" "}
            &nbsp;80 kg
          </p>
          <p>
            <span className="rojo">Altura &nbsp;&nbsp;: </span> &nbsp;1.70 cm
          </p>
        </div>
      </div>
      <div className="detalle">
        <div className="titulo">
          <h4>Progreso General</h4>
        </div>
          <div className="grafica">
            <span className="valor-progreso">0%</span>
          </div>
      </div>
    </div>
  );
};

export default PerfilInfo;
