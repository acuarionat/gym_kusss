import React from 'react'
import "./Informacion.css";
const Informacion = () => {
  return (
    <div>
      <div className='contenedor'>
      <h2 className="titulo1">Ingresar</h2>
      
      <h3 className="parrafo">Correo</h3>
      <input type="text" id='input' />
      <h3 className="parrafo">Contraseña</h3>
      <input type="text" id="input"/>
      
      <div className='button-container'>
        <button className='button'><h2 className="titulob">ACEPTAR</h2></button>
      </div>
      </div>
    </div>
  )
}

export default Informacion