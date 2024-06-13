import React, { useState, useEffect } from 'react';
import TablaFila from './TablaFila';
import './Tabla.css';

const Tabla = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://6660e68963e6a0189fe7dc30.mockapi.io/api/v1/table');
        const json = await response.json();
        setData(json);
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
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