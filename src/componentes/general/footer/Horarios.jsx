import React from 'react';
import "./Horarios.css";

const Horarios = ({ horarios }) => {
  return (
    <div className='contenedor'>
      <h2 className="parrafo">Horarios de Atención</h2>
      {horarios.map((horario, index) => (
        <div className="red-social" key={index}>
          <h3 className="parrafo">{horario.dia}</h3>
          <h3 className="parrafo">{horario.horas}</h3>
        </div>
      ))}
    </div>
  );
}

export default Horarios;