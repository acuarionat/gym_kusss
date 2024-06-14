import React from 'react';
import NovedadAlimentacion from './NovedadAlimentacion';
import { useNavigate } from 'react-router-dom';
const TextoAlimentacion = () => {
    const navigate = useNavigate();
    return (
        <>
        <div onClick={() => navigate('/perdida-de-grasa')}>
        <NovedadAlimentacion />
        </div>
        <div onClick={() => navigate('/nutricion')}>
        <NovedadAlimentacion />
        </div>
        <div onClick={() => navigate('/saludmental')}>
        <NovedadAlimentacion />
        </div>
        </>
    );
};

export default TextoAlimentacion;
