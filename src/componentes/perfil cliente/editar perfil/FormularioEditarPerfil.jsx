import React from 'react';
import './FormularioEditarPerfil.css'
const FormularioEditarPerfil = () => {
  return (
    <div className='formulario'>
      <form action="/submit" method="post">
        <div className='general'>
          <label htmlFor="campos">Nombre:</label><br />
          <input type="text" id="nombre" name="nombre" required /><br /><br />
        
          <label htmlFor="campos">Email:</label><br />
          <input type="email" id="email" name="email" required /><br /><br />
        
          <label htmlFor="campos">Telefono:</label><br />
          <input type="tel" id="telefono" name="telefono" required /><br /><br />
        </div>
        
        <input className='guardar' type="submit" value="GUARDAR" />
      </form>
    </div>
  );
}

export default FormularioEditarPerfil;
