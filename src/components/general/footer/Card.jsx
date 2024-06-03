import React from 'react';
import RedesSociales from './RedesSociales';
import Horarios from './Horarios';
import "./Card.css";
const Card = () => {
  return (
    <div className="card">
      <RedesSociales />
      <Horarios />
    </div>
  );
}

export default Card;
