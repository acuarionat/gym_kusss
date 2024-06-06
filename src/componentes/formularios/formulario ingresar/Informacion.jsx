import React from 'react';
import "./Informacion.css";

const Informacion = () => {
  return (
    <div>
      <div className='contenedorLogin-informacion'>
        <h2 className="titulo1-informacion">Ingresar</h2>
        
        <h3 className="parrafo-informacion">Correo</h3>
        <input type="text" id='input-informacion' className='input-text-informacion' />
        <h3 className="parrafo-informacion">Contraseña</h3>
        <input type="text" id="input-informacion" className='input-text-informacion'/>
        
        <div className='button-container-informacion'>
          <button className='button-informacion'><h2 className="titulob-informacion">ACEPTAR</h2></button>
        </div>
      </div>
    </div>
  );
}

export default Informacion;
