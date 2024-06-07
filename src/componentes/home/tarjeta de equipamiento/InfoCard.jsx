import React from 'react';
import './InfoCard.css'

const InfoCard = ({ title, subTitle }) => (
    <div className="carde">
        <p className="title-e">{title}</p>
        <h2 className="title-E">{subTitle}</h2>
    </div>
);

export default InfoCard;
