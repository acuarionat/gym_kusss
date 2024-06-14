import React, { useEffect, useState } from 'react';
import TarjetaEjercicioFuerza from './componentes/perfil entrenador/ejercicios/TarjetaEjercicioFuerza';

const EjerciciosFApp = () => {
  const [ejerciciosf, setEjerciciosF] = useState([]);

  useEffect(() => {
    fetch('https://665fe2675425580055b13673.mockapi.io/api/v1/ejercicios/')
      .then((res) => res.json())
      .then((data) => {
        // Aquí puedes modificar o filtrar los datos como sea necesario
        const primerosEjercicios = data.slice(0, 10); // Por ejemplo, tomamos los primeros 10 ejercicios
        setEjerciciosF(primerosEjercicios);
      })
      .catch((error) => {
        console.error('Error fetching ejercicios:', error);
      });
  }, []); // El segundo argumento [] indica que el efecto se ejecuta solo una vez al montar el componente
  
  const handleCardClick = (id) => {
    console.log('ID de la tarjeta presionada:', id);
    // Aquí puedes manejar el ID como necesites, por ejemplo, almacenarlo en el estado
  };

  return (
    <>
      {ejerciciosf.map((ejerciciof) => (
        <TarjetaEjercicioFuerza key={ejerciciof.id} ejerciciof={ejerciciof} onCardClick={handleCardClick} />
      ))}
    </>
  );
};

export default EjerciciosFApp;
