import React from 'react';
import TextoAgregarValor from '../cargar formulario/TextoAgregarValor';
import BotonAgregarValor from '../cargar formulario/BotonAgregarValor';
import './OpcionAgregarValor.css';

const OpcionAgregarValor = () => {
  return (
    <div className="opcion-agregar-valor">
      <TextoAgregarValor />
      <BotonAgregarValor/>
    </div>
  );
};

export default OpcionAgregarValor;
