import React from 'react';
import "./Entrada.css";

const Entrada = () => {
  return (
    <div className='contenedor'>
    <form className='contenedor-form'
      action="https://formspree.io/f/xbjnnkrb"
      method="POST"
    >
      <h2 className="titulo">SUGERENCIAS:</h2>
      <input type="text" id="sugerencias" name="sugerencias" className="input-field" />
  
      <h2 className="titulo">QUEJAS:</h2>
      <input type="text" id="quejas" name="quejas" className="input-field" />
  
      <div className='button-container'>
        <button type="submit" className='button'>
          <h2 className="titulo">Enviar</h2>
        </button>
      </div>
    </form>
  </div>
  
  );
}

export default Entrada;