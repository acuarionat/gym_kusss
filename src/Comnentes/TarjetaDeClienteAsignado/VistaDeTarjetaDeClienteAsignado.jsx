import React from 'react'
import './VistaDeTarjetaDeClienteAsignado.css'
import Cabecera7 from './Cabecera7'
import FlechaCabecera from './FlechaCabecera'
import MoleculaBuscador from './MoleculaBuscador'
import ImagenLupaBuscador from './ImagenLupaBuscador'
import MoleculaTarjetaUsuario from './MoleculaTarjetaUsuario'



const VistaDeTarjetaDeClienteAsignado = () => {
    return (
    <>
        <div className='UsuAsig'>
            <Cabecera7/>
            <FlechaCabecera/>
            <div className='Buscador13'>
            <MoleculaBuscador/>
            </div>
            <ImagenLupaBuscador/>
            <MoleculaTarjetaUsuario/>
        </div>



    </>

    );
  };
  
  export default VistaDeTarjetaDeClienteAsignado;
