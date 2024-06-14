import React from 'react';
import "./InformacionRegistro.css";

const InformacionRegistro = () => {
  return (
    <div>
      <form >
      <div className='contenedorLogin-informacion'>
        <h3 className="parrafo-informacion">Nombres</h3>
        <input type="text" className='input-text-informacion input-informacion' />
        <h3 className="parrafo-informacion">Correo</h3>
        <input type="email" className='input-text-informacion input-informacion' />
        <h3 className="parrafo-informacion">Contraseña</h3>
        <input type="password" className="input-text-informacion input-informacion"/>
        <h3 className="parrafo-informacion">Telefono</h3>
        <input type="number" className="input-text-informacion input-informacion"/>  
        </div>
      </form>
    </div>
  );
}

export default InformacionRegistro;
