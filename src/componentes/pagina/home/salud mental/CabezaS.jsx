import React from 'react';
import "./CabezaS.css"
import { useNavigate } from 'react-router-dom';
const CabezaS = () => {
    const navigate = useNavigate();
    return (
        <div className='headDetalle'>
            <img className='icoDetalle' onClick={() => navigate('/')} src={"https://ibb.co/rmg1SV1"} alt="Flecha Atras" />
            <p className='tituloDetalles'>SALUD MENTAL</p>
        </div>
    );
};

export default CabezaS;
