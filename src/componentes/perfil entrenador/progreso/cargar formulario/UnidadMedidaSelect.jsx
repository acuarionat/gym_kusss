import React from 'react';
import './UnidadMedidaSelect.css';

const UnidadMedidaSelect = () => {
  return (
    <div className="unidad-medida-select">
      <label htmlFor="unidadMedida">Unidad Medida:</label>
      <div className="select-wrapper" style={{ width: '143px' }}>
        <select id="unidadMedida" name="unidadMedida" style={{ width: '100%' }}>
          <option value="kg">Kilogramos</option>
          <option value="lb">Libras</option>
          <option value="g">Gramos</option>
        </select>
      </div>
    </div>
  );
};

export default UnidadMedidaSelect;
