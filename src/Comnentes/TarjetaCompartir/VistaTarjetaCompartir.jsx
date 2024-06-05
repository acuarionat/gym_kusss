import React from 'react'
import './VistaTarjetaCompartir.css'
import TextoCompartir from './TextoCompartir'
import MoleculaCompartir from './MoleculaCompartir'
import TextoCompartirConOtros from './TextoCompartirConOtros'
import MoleculaDeLogos from './MoleculaDeLogos'


const VistaTarjetaCompartir = () => {
    return (
        <div className='Compartir'>
            < TextoCompartir/>
            < MoleculaCompartir/>
            <TextoCompartirConOtros/>
            <MoleculaDeLogos/>
        </div>
    );
  };
  
  export default VistaTarjetaCompartir;