import React from 'react';
import './Mapa.css';

const IconM = ({ src, alt, onClick }) => (
    <div className="iconM">
        <img
            src={src}
            alt={alt}
            onClick={onClick}
        />
    </div>
);

export default IconM;
