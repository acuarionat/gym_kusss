import React from 'react';
import './FormulacionInfo.css';

const Boton = ({ type = "submit", text }) => (
    <button type={type} className="submit-btn">{text}</button>
);

export default Boton;
