import React from 'react';
import Texto from './TextoAgregarValor';
import BotonAgregar from './BotonAgregarValor';
import './VistaProgresoEntrenador.css';

const OpcionAgregarValor = () => {
  return (
    <div className="opcion-agregar-valor">
      <Texto />
      <BotonAgregar />
    </div>
  );
};

export default OpcionAgregarValor;
