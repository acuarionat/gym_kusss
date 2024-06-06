import React from 'react';
import "./DescripcionInfo.css"

const DescripcionInfo = ({ title, description }) => (
    <div>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
    </div>
);

export default DescripcionInfo;
