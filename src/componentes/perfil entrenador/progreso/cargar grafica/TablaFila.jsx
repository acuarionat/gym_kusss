// TablaFila.jsx
import React from 'react';
import './TablaFila.css';

const TablaFila = ({ date, weight, isEven }) => {
  return (
    <div className={`table-row ${isEven ? 'even' : 'odd'}`}>
      <div className="table-cell">{date}</div>
      <div className="table-cell">{weight} kg</div>
    </div>
  );
};

export default TablaFila;
