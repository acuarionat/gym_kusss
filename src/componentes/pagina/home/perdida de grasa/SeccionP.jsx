import React from 'react';
import "./SeccionP.css"
const SectionP = () => {
  return (
    <div className="container_tituloP">
      <img src={"/imagenes/PerdidaDeGrasa.png"} alt="Icono" className="iconoP" />
      <div> 
        <h2 className="tituloP">Como perder Grasa</h2>
        <p className="parrafoP">Hay cientos de dietas de moda, programas para adelgazar y, directamente, fraudes que prometen una pérdida de peso rápida y fácil.</p>
      </div>
    </div>
  );
};

export default SectionP;
