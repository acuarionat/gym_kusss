import React from 'react';
import './ValorInput.css';

const ValorInput = () => {
  return (
    <div className="valor-input">
      <label htmlFor="valor">Valor:</label>
      <input type="number" id="valor" name="valor" style={{ width: '143px' }} />
    </div>
  );
};

export default ValorInput;
