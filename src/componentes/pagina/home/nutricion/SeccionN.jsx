import React from 'react';
import "./SeccionN.css"

const SeccionN = () => {
  return (
    <div className="container_tituloN">
      <img src={"/imagenes/Nutricion.png"} alt="Icono" className="iconoN" />
      <div>
        <h2 className="tituloN">Cómo Alimentarse Saludablemente</h2>
        <p className="parrafoN">Nutrir tu cuerpo con alimentos saludables es la clave para una vida llena de energía, vitalidad y bienestar.</p>
      </div>
    </div>
  );
};

export default SeccionN;
