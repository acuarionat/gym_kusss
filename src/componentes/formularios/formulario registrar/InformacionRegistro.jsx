import React from 'react';
import "./InformacionRegistro.css";

const InformacionRegistro = ({ registro, handleChange, handleSubmit }) => {
  return (
    <div>
      <div className='container-login-info'>
        <h3 className="paragraph-info">Nombres</h3>
        <input 
          type="text" 
          name="name" 
          value={registro.name} 
          onChange={handleChange} 
          className='input-text-info input-info' 
        />
        <h3 className="paragraph-info">Correo</h3>
        <input 
          type="text" 
          name="email" 
          value={registro.email} 
          onChange={handleChange} 
          className='input-text-info input-info' 
        />
        <h3 className="paragraph-info">Contraseña</h3>
        <input 
          type="text" 
          name="contraseña" 
          value={registro.contraseña} 
          onChange={handleChange} 
          className="input-text-info input-info"
        />
        <h3 className="paragraph-info">Telefono</h3>
        <input 
          type="text" 
          name="telefono" 
          value={registro.telefono} 
          onChange={handleChange} 
          className="input-text-info input-info"
        />
        <div className='button-container-info'>
          <button className='button-info' onClick={handleSubmit}>
            <h2 className="titleb-info">ACEPTAR</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default InformacionRegistro;
