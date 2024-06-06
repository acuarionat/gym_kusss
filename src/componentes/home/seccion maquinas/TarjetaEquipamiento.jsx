import React from 'react'
import './TarjetaEquipamiento.css'
import TextoEquipo from './TextoEquipo'
import ImagenDerecha from './ImagenDerecha'

const TarjetaEquipamiento = () => {
    return (
        <>
            <div className='TarEqui1'>
                <ImagenDerecha/>
                <TextoEquipo/>
            </div>
        </>
    );
  };
  
  export default TarjetaEquipamiento;