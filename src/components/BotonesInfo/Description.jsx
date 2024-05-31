import React from 'react';

const Description = ({ title, description }) => (
    <div>
        <h2 className="title">{title}</h2>
        <p className="description">{description}</p>
    </div>
);

export default Description;
