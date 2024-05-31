import React from 'react';
import "./Entrada.css";

const Entrada = () => {
  return (
    <div className='contenedor'>
      <h1 className="teko-regular">SUGERENCIAS:</h1>
      <input type="text" />
      <h1 className="teko-regular">QUEJAS:</h1>
      <input type="text" />
      <div className='button-container'>
        <button className='button'><h2 className="teko-regular">Enviar</h2></button>
      </div>
    </div>
  );
}

export default Entrada;