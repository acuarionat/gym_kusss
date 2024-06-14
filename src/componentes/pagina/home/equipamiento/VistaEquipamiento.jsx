import React, { useEffect, useState } from 'react';
import './VistaEquipamiento.css';
import CabezaEquipamiento from './CabezaEquipamiento';
import TarjetadeEquipamiento from './VistaTarjetadeEquipamiento';
const VistaEquipamiento = () => {
  return (
    <div className='vista-equipamiento'>
      <CabezaEquipamiento />
      <p className='parrafo-equipamiento'>Descubre el equipamiento del gimnasio que te llevará al siguiente nivel</p>
      <TarjetadeEquipamiento />
    </div>
  );
};

export default VistaEquipamiento;