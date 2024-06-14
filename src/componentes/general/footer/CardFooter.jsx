import React from 'react';
import RedesSociales from './RedesSociales';
import Horarios from './Horarios';
import "./CardFooter.css";
import redesData from '../../../datos/RedesSociales.json';
import horariosData from '../../../datos/Horarios.json';

const CardFooter = () => {
  return (
    <div className="cardfooter">
      <RedesSociales redes={redesData} />
      <Horarios horarios={horariosData} />
    </div>
  );
}

export default CardFooter;
