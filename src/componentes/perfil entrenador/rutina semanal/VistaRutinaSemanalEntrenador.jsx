import React from 'react';
import './VistaRutinaSemanalEntrenador.css';
import CabezaRutinaEntrenador from './CabezaRutinasEntrenador';
import NavBarPerfilEntrenador from '../../general/NavBarPerfilEntrenador';
import RutinaApp from '../../../RutinaApp';
function RutinaSemanalEntrenador() {
  return (
    <div className='principalRutinaEntrenador'>
      <CabezaRutinaEntrenador />
      <RutinaApp/>
      <button className='botonRutinaEntre'>
        <p className='textoBotonEditarRutina'>EDITAR RUTINA</p>
      </button>
      <NavBarPerfilEntrenador />
    </div>
  );
}

export default RutinaSemanalEntrenador;
