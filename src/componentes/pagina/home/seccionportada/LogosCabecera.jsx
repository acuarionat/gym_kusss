import React from 'react';
import './LogosCabecera.css';

const LogosCabecera = () => {
    return (
        <div className='LogosContainer'>
            <img src="/imagenes/logo.png" alt="Logo Kuss" className='LogoKussCabecera1' />
            <button id="BotonMenu" className='BotonMenu'>
                <img src="/imagenes/barras3.png" alt="Barras de Navegación" />
            </button>
        </div>
    );
};

export default LogosCabecera;
