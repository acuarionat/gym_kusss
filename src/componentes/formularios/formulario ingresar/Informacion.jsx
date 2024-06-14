import React from "react";
import "./Informacion.css";

const Informacion = () => {
  return (
    <div>
      <div className="contenedorLogin-informacion">
        <h2 className="titulo1-informacion">Ingresar</h2>
        <form>
          <div className="contenedor-formulario">
            <label className="parrafo-informacion">Correo</label>
            <input className="input-text"
              type="email"
            />
            <label className="parrafo-informacion">Contraseña</label>
            <input className="input-text"
              type="password"
            />
            <input className="aceptar" type="submit" value="ACEPTAR" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Informacion;
