import React from 'react';
import "./CabezaN.css"
import { useNavigate } from 'react-router-dom';
const CabezaN = () => {
  const navigate = useNavigate();
  return (
    <div className='headDetalle'>
            <img className='icoDetalle' onClick={() => navigate('/')} src={"/imagenes/FlechaIzquierda.png"} alt="Flecha Atras" />
            <p className='tituloDetalles'>NUTRICION</p>
        </div>
  );
};

export default CabezaN;
