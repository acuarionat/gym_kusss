import React from 'react';
import Icon from "./IconInfo";
import Description from "./DescripcionInfo"
import "./CardInfo.css"

const CardInfo = ({ iconSrc, iconAlt, title, description }) => (
    <div className="card-i">
        <Icon src={iconSrc} alt={iconAlt} />
        <Description title={title} description={description} />
    </div>
);

export default CardInfo;
