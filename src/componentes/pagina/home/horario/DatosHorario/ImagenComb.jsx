import React from 'react';
import './ImagenComb.css';
import horario from '/imagenes/horario.png';

const ImagenComb = () => {
  const handleDownload = () => {
    console.log("Descargar botón clickeado");
  };

  return (
    <div className="containerHorario">
      <img src={horario} alt="Horario" className="responsive-image" />
      <p className='parrafo-horario'>Descargar Horario</p>
      <select className="combo-boxHorario">
        <option value="jpeg">JPEG</option>
        <option value="png">PNG</option>
        <option value="pdf">PDF</option>
      </select>
      <button className="download-button" onClick={handleDownload}>Descargar</button>
    </div>
  );
}

export default ImagenComb;
