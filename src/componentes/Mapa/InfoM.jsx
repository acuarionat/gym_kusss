import React from 'react';
import './Mapa.css';

const Info = ({ locationIcon, phoneIcon, locationText, phoneText }) => (
    <div className="info">
        <div className="icon-text">
            <img src={locationIcon} alt="Icono Ubicacion" className="iconoTex" />
            <h2>{locationText}</h2>
        </div>
        <div className="icon-text">
            <img src={phoneIcon} alt="Icono Telefono" className="iconoTex" />
            <h2>{phoneText}</h2>
        </div>
    </div>
);

export default Info;
