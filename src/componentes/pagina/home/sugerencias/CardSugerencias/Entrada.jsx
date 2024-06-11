import React from 'react';
import "./Entrada.css";

const Entrada = () => {
  return (
    <div className='contenedor'>
      <h2 className="titulo">SUGERENCIAS:</h2>
      <input type="text" />
      <h2 className="titulo">QUEJAS:</h2>
      <input type="text" />
      <div className='button-container'>
        <button className='button'><h2 className="titulo">Enviar</h2></button>
      </div>
    </div>
  );
}

export default Entrada;