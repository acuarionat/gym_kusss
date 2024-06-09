import React from 'react';
import "./CardRegistro.css";
import Informacion from './InformacionRegistro';
import BarraGris from '../../pagina/nosotros/BarraSideBar/BarraGris';
const CardRegistro = () => {
  return (
    <div className="card-container">
      <BarraGris />
      <h1 className="teko-titulo1">BIENVENIDO</h1>
      <div>
      <Informacion/>
      </div>
    </div>
  );
}
export default CardRegistro;
