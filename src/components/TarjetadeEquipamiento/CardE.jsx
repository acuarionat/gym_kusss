import React from 'react';
import Icono from './Icono';
import InfoCard from './InfoCard';

const CardE = ({ iconSrc, iconAlt, title, subTitle }) => (
    <div className="cardE">
        <div className="borde">
            <Icono src={iconSrc} alt={iconAlt} />
            <InfoCard title={title} subTitle={subTitle} />
        </div>
    </div>
);

export default CardE;
