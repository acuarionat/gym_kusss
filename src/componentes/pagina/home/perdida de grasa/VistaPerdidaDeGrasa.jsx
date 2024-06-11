import React, { useState, useEffect } from 'react';
import './VistaPerdidaDeGrasa.css'
import Header from './CabezaP'
import Section from './SeccionP';
import Article from './ArticuloP';

const VistaPerdidaDeGrasa = () => {
  const [perdidaDeGrasaData, setPerdidaDeGrasaData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://665fc14e5425580055b0bc8c.mockapi.io/Project/api/v1/Pages');
        const jsonData = await response.json();
        const filteredData = jsonData.flatMap(item => item.PerdidaDeGrada || []);
        setPerdidaDeGrasaData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="containerP">
      <Header />
      <Section />
      <Article data={perdidaDeGrasaData} />
    </div>
  );
};

export default VistaPerdidaDeGrasa;
