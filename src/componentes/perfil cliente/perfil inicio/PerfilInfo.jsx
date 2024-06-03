import React from "react";
import "./PerfilInfo.css";

const PerfilInfo = () => {
  return (
      <div className="detalle-informacion">
        <h4>Informacion General</h4>
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
  );
};

export default PerfilInfo;
