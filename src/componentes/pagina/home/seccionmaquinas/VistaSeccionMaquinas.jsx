import React from 'react'
import './VistaSeccionMaquinas.css'
import TituloSeccion from './TituloSeccion'
import TarjetaDisciplinas from './TarjetaDisciplinas'
import TarjetaEquipamiento from './TarjetaEquipamiento'

const VistaSeccionMaquinas = () => {
    return (
        <div className='SeccionMaquinas'>
            <TituloSeccion/>
            <TarjetaDisciplinas/>
            <TarjetaEquipamiento/>
        </div>

    );
  };
  
  export default VistaSeccionMaquinas;