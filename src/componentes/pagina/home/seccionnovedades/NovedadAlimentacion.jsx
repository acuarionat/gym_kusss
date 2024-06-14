import React from 'react';
import './NovedadAlimentacion.css'; 

const NovedadAlimentacion = () => {
    return (
        <button className='NovAlimentacion1'>
            <img src="imagenes/RectangleGranate.png" alt="" className="IconoNovedades" />
            <div className="InformacionNovedades1">
                <p>¡Mira estos consejos de alimentación!</p>
                <p>12/05/2024</p>
                <p>Nutrición</p>
            </div>
        </button>
    );
};

export default NovedadAlimentacion;
