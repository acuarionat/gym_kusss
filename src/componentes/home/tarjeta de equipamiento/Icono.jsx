import React from 'react';
import './Icono.css'

const Icono = ({ src, alt }) => (
    <div className="iconE">
        <img src={src} alt={alt} />
    </div>
);

export default Icono;
