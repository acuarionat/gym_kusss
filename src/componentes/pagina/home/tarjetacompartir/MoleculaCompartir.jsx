import React from 'react'
import './VistaTarjetaCompartir.css'
import TextoMiProgreso from './TextoMiProgreso'
import BotonCopiarVinculo from './BotonCopiarVinculo'

const MoleculaCompartir = () => {
    return (
        <div className='logo'>
          <TextoMiProgreso/>
          <BotonCopiarVinculo/>
        </div>
    );
  };
  
  export default MoleculaCompartir;