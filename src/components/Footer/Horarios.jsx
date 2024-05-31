import React from 'react'
import "./Horarios.css";
const Horarios = () => {
  return (
    <div className='contenedor'>
      <h1 className="poppins-semibold">Horarios de Atencion</h1>
      <div className="red-social">
        <h2 className="poppins-medium">Lunes</h2>
        <h2 className="poppins-medium">9:00 am - 10:00 pm</h2>
      </div>
      <div className="red-social">
        <h2 className="poppins-medium">Martes</h2>
        <h2 className="poppins-medium">8:00 am - 10:00 pm</h2>
      </div>
      <div className="red-social">
        <h2 className="poppins-medium">Miercoles</h2>
        <h2 className="poppins-medium">9:00 am - 10:00 pm</h2>
      </div>
      <div className="red-social">
        <h2 className="poppins-medium">Jueves</h2>
        <h2 className="poppins-medium">9:00 am - 10:00 pm</h2>
      </div>
      <div className="red-social">
        <h2 className="poppins-medium">Viernes</h2>
        <h2 className="poppins-medium">8:00 am - 12:00 pm</h2>
      </div>
    </div>
  )
}

export default Horarios