import React from 'react'
import './VistaFormularioDeRegistros.css'
import CampoNombre from './CampoNombre'
import CampoCorreo from './CampoCorreo'
import CampoContraseña from './CampoContraseña'
import CampoTelefono from './CampoTelefono'





const CamposDeLlenadoRegistrar = () => {
    return (
        <>
        <div className='Campos10'>
            <CampoNombre/>
            <CampoCorreo/>
            <CampoContraseña />
            <CampoTelefono/>
        
        </div>
        
                
        </>


    );
  };
  
  export default CamposDeLlenadoRegistrar;
