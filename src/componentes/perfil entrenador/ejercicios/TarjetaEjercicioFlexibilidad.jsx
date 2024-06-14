import React from 'react'
import './TarjetaEjercicio.css'
const TarjetaEjercicioFlexibilidad = ({ejerciciofl}) => {
  return (
         <div className="ejercicio">
        <div className="imagen-ejer"></div>
      <div className="descripcion-ejer">
      <h4>{ejerciciofl.nombre}</h4>
      <p className='musculo'>Musculo Principal: {ejerciciofl.musculo_principal}</p>
      <p className='dif'>{ejerciciofl.dificultad}</p>
      </div>
    </div>
  )
}

export default TarjetaEjercicioFlexibilidad