import React from 'react'
import "./Informacion.css";
const Informacion = () => {
  return (
    <div>
      <div className='contenedor'>
      <h2 className="teko-regular">Ingresar</h2>
      
      <h3 className="poppins-light">Correo</h3>
      <input type="text" id='input' />
      <h3 className="poppins-light">Contraseña</h3>
      <input type="text" id="input"/>
      
      <div className='button-container'>
        <button className='button'><h2 className="teko-regular">ACEPTAR</h2></button>
      </div>
      </div>
    </div>
  )
}

export default Informacion