import React from 'react'
import './VistaDeTarjetaDeClienteAsignado.css'
import CirculoUsuario from './CirculoUsuario'
import TextoTarjetaUsuario from './TextoTarjetaUsuario'

const MoleculaTarjetaUsuario = () => {
    return (
        <>
        <div className='TarjetaUs'>
          <CirculoUsuario/>
          <TextoTarjetaUsuario/>
        </div>
        </>
    );
  };
  
  export default MoleculaTarjetaUsuario;