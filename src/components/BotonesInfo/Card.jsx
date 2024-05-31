import React from 'react';
import Icon from './Icon';
import Description from './Description';

const Card = ({ iconSrc, iconAlt, title, description }) => (
    <div className="card-i">
        <Icon src={iconSrc} alt={iconAlt} />
        <Description title={title} description={description} />
    </div>
);

export default Card;
