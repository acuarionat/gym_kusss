import React from 'react';
import "./Horarios.css";

const horarios = [
  { dia: 'Lunes', horas: '9:00 am - 10:00 pm' },
  { dia: 'Martes', horas: '8:00 am - 10:00 pm' },
  { dia: 'Miércoles', horas: '9:00 am - 10:00 pm' },
  { dia: 'Jueves', horas: '9:00 am - 10:00 pm' },
  { dia: 'Viernes', horas: '8:00 am - 12:00 pm' },
];

const Horarios = () => {
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
