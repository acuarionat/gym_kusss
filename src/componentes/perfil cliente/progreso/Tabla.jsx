import React, { useState, useEffect } from 'react';
import TablaFila from './TablaFila';
import './VistaProgreso.css';

const Tabla = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    // Simulación de llamada a una API
    const fetchData = () => {
      return [
        { date: '1/01/2024', weight: '70 Kg' },
        { date: '1/02/2024', weight: '65 Kg' },
        { date: '1/03/2024', weight: '60 Kg' },
      ];
    };

    const apiData = fetchData();
    setData(apiData);
  }, []);

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Peso</h2>
      </div>
      <div className="table">
        {data.map((row, index) => (
          <TablaFila
            key={index}
            date={row.date}
            weight={row.weight}
            isEven={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabla;
