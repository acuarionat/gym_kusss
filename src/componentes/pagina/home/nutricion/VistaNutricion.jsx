import React, { useState, useEffect } from 'react';
import Cabeza from './CabezaN';
import Seccion from './SeccionN';
import Articulo from './ArticuloN';
import './VistaNutricion.css';

const VistaNutricion = () => {
  const [nutritionData, setNutritionData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://665fc14e5425580055b0bc8c.mockapi.io/Project/api/v1/Pages');
        const jsonData = await response.json();
        const filteredData = jsonData.flatMap(item => item.Nutricion || []);
        setNutritionData(filteredData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="containerN">
      <Cabeza />
      <Seccion />
      <Articulo data={nutritionData} />
    </div>
  );
};

export default VistaNutricion;
