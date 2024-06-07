import React from 'react';
import './FormularioEditarPerfil.css'
const FormularioEditarPerfil = () => {
  return (
    <div className='formulario'>
      <form action="/submit" method="post">
        <div className='general'>
          <label htmlFor="campos">Nombre:</label>
          <input type="text" id="nombre" name="nombre" required />
        
          <label htmlFor="campos">Email:</label>
          <input type="email" id="email" name="email" required />
        
          <label htmlFor="campos">Telefono:</label>
          <input type="tel" id="telefono" name="telefono" required />
        </div>
        
        <input className='guardar' type="submit" value="GUARDAR" />
      </form>
    </div>
  );
}

export default FormularioEditarPerfil;
