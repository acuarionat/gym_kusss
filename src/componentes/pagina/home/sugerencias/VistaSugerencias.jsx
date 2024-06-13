import React, { useEffect, useState } from 'react';
import './VistaSugerencias.css';
import CabezaSugerencias from './CabeceraSugerencias/CabezaSugerencias';
import CardEntrada from './CardSugerencias/CardEntrada';
const VistaSugerencias = () => {
  return (
    <div className='vista-sugerencias'>
      <CabezaSugerencias />
      <CardEntrada />
    </div>
  );
};

export default VistaSugerencias;