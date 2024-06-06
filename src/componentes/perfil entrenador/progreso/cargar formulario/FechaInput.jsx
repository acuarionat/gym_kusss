import React from 'react';
import './FechaInput.css';

const FechaInput = () => {
  return (
    <div className="fecha-input">
      <label htmlFor="fecha">Fecha:</label>
      <input type="date" id="fecha" name="fecha" style={{ maxWidth: '327px' }} />
    </div>
  );
};

export default FechaInput;
