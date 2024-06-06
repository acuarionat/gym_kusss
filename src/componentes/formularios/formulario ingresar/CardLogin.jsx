import React from 'react';
import "./CardLogin.css";
import Informacion from './Informacion';
import BarraGris from '../../pagina/nosotros/BarraSideBar/BarraGris';
const CardLogin = () => {
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
export default CardLogin;
