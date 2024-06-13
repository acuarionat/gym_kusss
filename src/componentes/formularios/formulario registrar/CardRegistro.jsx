import React from 'react';
import "./CardRegistro.css";
import Informacion from './InformacionRegistro';
import BarraTransparente from '../BarraTransparente';

const CardRegistro = () => {
  return (
    <div className="card-containerRegistro">
      <BarraTransparente />
      <h1 className="teko-tituloRegistro">Registrar</h1>
      <div>
        <Informacion />
      </div>
    </div>
  );
}

export default CardRegistro;
