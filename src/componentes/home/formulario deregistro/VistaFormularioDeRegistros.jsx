import React from 'react'
import './VistaFormularioDeRegistros.css'
import ImagenBackground from './ImagenBackground'
import BarraDeNavegacion from './BarraDeNavegacion'
import TextoRegistrar from './TextoRegistrar'
import CamposDeLlenadoRegistrar from './CamposDeLlenadoRegistrar'
import BotonAceptar from './BotonAceptar'


const VistaFormularioDeRegistros = () => {
    return (
    <div className='FormularioRegistro'>
        <ImagenBackground/>
        <BarraDeNavegacion/>
        <TextoRegistrar/>
        <CamposDeLlenadoRegistrar/>
        <BotonAceptar/>
    </div>
    );
  };
  
  export default VistaFormularioDeRegistros;
