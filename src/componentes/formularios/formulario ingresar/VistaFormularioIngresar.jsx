import React from 'react';
import "./VistaFormularioIngresar.css";
import Informacion from './Informacion';
import BarraTransparente from '../BarraTransparente';

const VistaFormularioIngresar = () => {
  return (
    <div className="card-container">
      <BarraTransparente />
      <h1 className="teko-titulo1">BIENVENIDO</h1>
      <div>
        <Informacion />
      </div>
    </div>
  );
}

export default VistaFormularioIngresar;
