import React from 'react';
import './VistaRutinaSemanalEntrenador.css';
import CabezaRutinaEntrenador from './CabezaRutinasEntrenador';
import NavBarPerfilEntrenador from '../../general/NavBarPerfilEntrenador';
import Rutina from '../../../RutinaApp';
function RutinaSemanalEntrenador({rutina}) {
  return (
    <div className='principalRutinaEntrenador'>
      <CabezaRutinaEntrenador />
      <Rutina rutina={rutina}/>
      <button className='botonRutinaEntre'>
        <p className='textoBotonEditarRutina'>EDITAR RUTINA</p>
      </button>
      <NavBarPerfilEntrenador />
    </div>
  );
}

export default RutinaSemanalEntrenador;
