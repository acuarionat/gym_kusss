import React, { useState, useEffect } from 'react';
import TablaFila from './TablaFila';
import './Tabla.css';

const Tabla = ({ idCliente }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://6660e68963e6a0189fe7dc30.mockapi.io/api/v1/progreso?search=${idCliente}`);
        const json = await response.json();
        const cliente = json.find(cliente => cliente.id_cliente === idCliente);
        if (cliente) {
          setData(cliente.seguimientos);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
      }
    };

    fetchData();
  }, [idCliente]);

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>Peso</h2>
      </div>
      <div className="table">
        {data.map((row, index) => (
          <TablaFila
            key={index}
            date={row.fecha_seguimiento}
            weight={row.peso}
            isEven={index % 2 === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Tabla;
