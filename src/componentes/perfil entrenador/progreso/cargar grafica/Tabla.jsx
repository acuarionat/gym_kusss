import React, { useState, useEffect } from 'react';
import TablaFila from './TablaFila';
import './Tabla.css';

const units = {
  altura: 'cm',
  peso: 'kg',
  porcentaje_grasa_corporal: '%',
  imc: 'kg/m²',
  circunferencia_cintura: 'cm',
  circunferencia_cadera: 'cm',
  circunferencia_brazos: 'cm',
  circunferencia_muslos: 'cm',
  fuerza: 'kg',
  pecho: 'cm',
  espalda: 'cm',
  porcentaje_masa_muscular: '%',
  tiempo_correr: 'min',
  distancia_correr: 'km',
  frecuencia_cardiaca_recuperacion: 'bpm'
};

const Tabla = ({ idCliente, selectedProgreso, selectedOption }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://6660e68963e6a0189fe7dc30.mockapi.io/api/v1/progreso`);
        const json = await response.json();
        const cliente = json.find(cliente => cliente.id_cliente === idCliente);
        if (cliente && selectedProgreso) {
          const progresoData = cliente.seguimientos[selectedProgreso.toLowerCase().replace(/ /g, '_')];
          setData(progresoData || []);
        } else {
          setData([]);
        }
      } catch (error) {
        console.error('Error fetching data: ', error);
        setData([]);
      }
    };

    fetchData();
  }, [idCliente, selectedProgreso]);

  const formatOption = (option) => option.toLowerCase().replace(/ /g, '_');

  const filteredData = data.filter(row => row[formatOption(selectedOption)] !== undefined);

  return (
    <div className="table-container">
      <div className="table-header">
        <h2>{selectedOption}</h2>
      </div>
      <div className="table">
        {filteredData.length > 0 ? (
          filteredData.map((row, index) => (
            <TablaFila
              key={index}
              date={row.fecha_seguimiento}
              value={row[formatOption(selectedOption)]}
              unit={units[formatOption(selectedOption)]}
              isEven={index % 2 === 1}
            />
          ))
        ) : (
          <p>Seleccione una opción</p>
        )}
      </div>
    </div>
  );
};

export default Tabla;
