import React from 'react';
import './VistaSeccionPortada.css';
import LogosCabecera from './LogosCabecera';
import ImagenSeccionPortada from './ImagenSeccionPortada';
import TextoCabecera from './TextoCabecera';

const VistaSeccionPortada = () => {
    return (
        <div className='PortadaHome'>
            <LogosCabecera />
            <ImagenSeccionPortada />
            <TextoCabecera />
        </div>
    );
};

export default VistaSeccionPortada;
