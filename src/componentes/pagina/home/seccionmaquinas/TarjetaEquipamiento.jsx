import React from 'react'
import { useNavigate } from 'react-router-dom';
import './TarjetaEquipamiento.css'
import TextoEquipo from './TextoEquipo'

const TarjetaEquipamiento = () => {
    const navigate = useNavigate();
    return (
        <>
            <button className='TarEqui1' onClick={() => navigate('/equipamiento')}>
                <TextoEquipo/>
            </button>
        </>
    );
  };
  
  export default TarjetaEquipamiento;