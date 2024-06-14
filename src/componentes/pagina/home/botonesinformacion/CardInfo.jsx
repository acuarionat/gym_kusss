import React from 'react';
import IconInfo from "./IconInfo";
import DescripcionInfo from "./DescripcionInfo";
import "./CardInfo.css";

const CardInfo = ({ iconSrc, iconAlt, title, description }) => (
    <div className="card-i">
        <IconInfo src={iconSrc} alt={iconAlt} />
        <DescripcionInfo title={title} description={description} />
    </div>
);

export default CardInfo;
