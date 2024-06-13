import React from 'react';
import "./InformacionRegistro.css";

const InformacionRegistro = ({ registro, handleChange, handleSubmit }) => {
  return (
    <div>
      <div className='contenedorLogin-informacion'>
        <h3 className="parrafo-informacion">Nombres</h3>
        <input 
          type="text" 
          name="name" 
          value={registro.name} 
          onChange={handleChange} 
          className='input-text-informacion input-informacion' 
        />
        <h3 className="parrafo-informacion">Correo</h3>
        <input 
          type="text" 
          name="email" 
          value={registro.email} 
          onChange={handleChange} 
          className='input-text-informacion input-informacion' 
        />
        <h3 className="parrafo-informacion">Contraseña</h3>
        <input 
          type="text" 
          name="contraseña" 
          value={registro.contraseña} 
          onChange={handleChange} 
          className="input-text-informacion input-informacion"
        />
        <h3 className="parrafo-informacion">Telefono</h3>
        <input 
          type="text" 
          name="telefono" 
          value={registro.telefono} 
          onChange={handleChange} 
          className="input-text-informacion input-informacion"
        />
        <div className='button-container-informacion'>
          <button className='button-informacion' onClick={handleSubmit}>
            <h2 className="titulob-informacion">ACEPTAR</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default InformacionRegistro;
