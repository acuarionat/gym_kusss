import React from 'react'
import './VistaSeccionMaquinas.css'
import TituloSeccion from './TituloSeccion'
import ImagenEquipos from './ImagenEquipos'
import TarjetaDisciplinas from './TarjetaDisciplinas'
import TarjetaEquipamiento from './TarjetaEquipamiento'

const VistaSeccionMaquinas = () => {
    return (
        <div className='SeccionMaquinas'>
            <TituloSeccion/>
            <ImagenEquipos/>
            <TarjetaDisciplinas/>
            <TarjetaEquipamiento/>
        </div>

    );
  };
  
  export default VistaSeccionMaquinas;