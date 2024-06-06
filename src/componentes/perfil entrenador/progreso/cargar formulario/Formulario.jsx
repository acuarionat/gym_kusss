import React from 'react';
import FechaInput from './FechaInput';
import ValorInput from './ValorInput';
import UnidadMedidaSelect from './UnidadMedidaSelect';
import './Formulario.css';

const Formulario = () => {
  return (
    <div className="formulario">
      <FechaInput />
      <div className="valor-unidad">
        <ValorInput />
        <UnidadMedidaSelect />
      </div>
    </div>
  );
};

export default Formulario;
