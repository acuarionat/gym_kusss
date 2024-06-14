import React from 'react';
import "./VistaFormularioRegistro.css";
import Informacion from './InformacionRegistro';
import BarraTransparente from '../BarraTransparente';

const VistaFormularioRegistro = () => {
  return (
    <div className="card-container1">
      <BarraTransparente />
      <h1 className="teko-titulo1">Registrar</h1>
      <div>
        <Informacion />
      </div>
    </div>
  );
}

export default VistaFormularioRegistro;
