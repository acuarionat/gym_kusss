import React from 'react';
import './TablaFila.css';

const TablaFila = ({ date, value, unit, isEven }) => {
  return (
    <div className={`table-row ${isEven ? 'even' : 'odd'}`}>
      <div className="table-cell">{date}</div>
      <div className="table-cell">{value} {unit}</div>
    </div>
  );
};

export default TablaFila;
