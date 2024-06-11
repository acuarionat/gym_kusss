import React, { useState } from 'react';
import './ImagenComb.css';
import horario from '/imagenes/horario.png';

const ImagenComb = () => {
  const [fileType, setFileType] = useState('jpeg');

  const handleDownload = () => {
    console.log(`Descargar botón clickeado, formato seleccionado: ${fileType}`);
    const link = document.createElement('a');
    link.href = `/imagenes/horario.${fileType}`; // Cambia esta ruta según corresponda
    link.download = `horario.${fileType}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleChange = (event) => {
    setFileType(event.target.value);
  };

  return (
    <div className="containerHorario">
      <img src={horario} alt="Horario" className="responsive-image" />
      <p className='parrafo-horario'>Descargar Horario</p>
      <select className="combo-boxHorario" value={fileType} onChange={handleChange}>
        <option value="jpeg">JPEG</option>
        <option value="png">PNG</option>
        <option value="pdf">PDF</option>
      </select>
      <button className="download-button" onClick={handleDownload}>DESCARGAR</button>
    </div>
  );
}

export default ImagenComb;
