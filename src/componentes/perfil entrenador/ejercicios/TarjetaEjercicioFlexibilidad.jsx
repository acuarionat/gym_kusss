import React from 'react'
import './TarjetaEjercicio.css'
const TarjetaEjercicioFlexibilidad = ({ejerciciofl}) => {
  return (
    <div>
         <div className="ejercicio">
        <img className="imagen-ejer"
          src={ejerciciofl.imagen}
          alt={`avatar de ${ejerciciofl.nombre}`}
        />
      <div className="descripcion-ejer">
      <h4>{ejerciciofl.nombre}</h4>
      <p className='musculo'>Musculo Principal: {ejerciciofl.musculo_principal}</p>
      <p className='dif'>{ejerciciofl.dificultad}</p>
      </div>
    </div>
    </div>
  )
}

export default TarjetaEjercicioFlexibilidad