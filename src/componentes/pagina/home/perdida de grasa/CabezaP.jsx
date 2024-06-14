import React from 'react';
import "./CabezaP.css"
import { useNavigate } from 'react-router-dom';
const CabezaP = () => {
  const navigate = useNavigate();
  return (
    <div className='headDetalle'>
            <img className='icoDetalle' onClick={() => navigate('/')} src={"/imagenes/FlechaIzquierda.png"} alt="Flecha Atras" />
            <p className='tituloDetalles'>PERDIDA DE GRASA</p>
    </div>
  );
};

export default CabezaP;
