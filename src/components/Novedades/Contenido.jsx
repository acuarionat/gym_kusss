import React from 'react';
import "./Contenido.css";

const Contenido = () => {
  return (
    <div>
      <h1 className="poppins-semibold1">¡Mira estos consejos de alimentación! </h1>
      <h2 className="poppins-medium1">12/02/2024</h2>
      <div className='button-container1'>
        <button className='button1'><h3 className="poppins-regular1">Salud</h3></button>
        <button className='button1'><h3 className="poppins-regular1">Nutricion</h3></button>
      </div>
    </div>
  );
}

export default Contenido;
