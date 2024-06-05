import React from 'react';
import RedesSociales from './RedesSociales';
import Horarios from './Horarios';
import "./CardFooter.css";
const CardFooter = () => {
  return (
    <div className="card">
      <RedesSociales />
      <Horarios />
    </div>
  );
}

export default CardFooter;
