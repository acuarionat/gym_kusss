import React, { useEffect, useState } from 'react';
import './VistaHorario.css';
import CabezaHorario from './CabeceraHorario/CabezaHorario';
import ImagenComb from './DatosHorario/ImagenComb';
const VistaHorario = () => {
  return (
    <div className='vista-horario'>
      <CabezaHorario />
      <p className='parrafo-horario'>Descubre nuestros horarios y encuentra la clase perfecta para ti</p>
      <ImagenComb />
    </div>
  );
};

export default VistaHorario;