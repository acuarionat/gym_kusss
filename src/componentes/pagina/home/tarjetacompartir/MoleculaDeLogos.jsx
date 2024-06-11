import React from 'react'
import './VistaTarjetaCompartir.css'
import MoleculaTwitter from './MoleculaTwitter'
import MoleculaFacebook from './MoleculaFacebook'
import MoleculaMesenger from './MoleculaMesenger'
import MoleculaDeRecurso from './MoleculaDeRecurso'
import MoleculaWasap from './MoleculaWasap'
import MoleculaCorreo from './MoleculaCorreo'
import MoleculaGmail from './MoleculaGmail'
import MoleculaMasOpciones from './MoleculaMasOpciones'


const MoleculaDeLogos = () => {
    return (
        <>
            <div className='twitter'>
            <MoleculaTwitter />
            </div>
            <div className='facebook'>
            <MoleculaFacebook />
            </div>
            <div className='messenger'>
            <MoleculaMesenger/>
            </div>
            <div className='recursos'>
            <MoleculaDeRecurso/>
            </div>
            <div className='wasap'>
            <MoleculaWasap/>
            </div>
            <div className='correo'>
            <MoleculaCorreo/>
            </div>
            <div className='gmail'>
            <MoleculaGmail/>
            </div>
            <div className='cruz'>
            <MoleculaMasOpciones/>
            </div>


        </>


    );
  };
  
  export default MoleculaDeLogos;