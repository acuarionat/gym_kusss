import React from 'react'
import "./Horarios.css";
const Horarios = () => {
  return (
    <div className='contenedor'>
      <h2 className="parrafo">Horarios de Atencion</h2>
      <div className="red-social">
        <h3 className="parrafo">Lunes</h3>
        <h3 className="parrafo">9:00 am - 10:00 pm</h3>
      </div>
      <div className="red-social">
        <h3 className="parrafo">Martes</h3>
        <h3 className="parrafo">8:00 am - 10:00 pm</h3>
      </div>
      <div className="red-social">
        <h3 className="parrafo">Miercoles</h3>
        <h3 className="parrafo">9:00 am - 10:00 pm</h3>
      </div>
      <div className="red-social">
        <h3 className="parrafo">Jueves</h3>
        <h3 className="parrafo">9:00 am - 10:00 pm</h3>
      </div>
      <div className="red-social">
        <h3 className="parrafo">Viernes</h3>
        <h3 className="parrafo">8:00 am - 12:00 pm</h3>
      </div>
    </div>
  )
}

export default Horarios