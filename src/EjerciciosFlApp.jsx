import React, { useEffect, useState } from 'react';
import TarjetaEjercicioFlexibilidad from './componentes/perfil entrenador/ejercicios/TarjetaEjercicioFlexibilidad'
const EjerciciosFlApp = () => {
    const [ejerciciosfl, setEjercicios] = useState([]);

    useEffect(() => {
      fetch('https://665fe2675425580055b13673.mockapi.io/api/v1/ejercicios/')
        .then((res) => res.json())
        .then((data) => {
          const diezejerciciosFiltrados = data.filter(ejercicios => ejercicios.id >= 11 && ejercicios.id <= 15);
          setEjercicios(diezejerciciosFiltrados);
        });
    }, []);
  
    return (
      <>
        {ejerciciosfl.map((ejerciciofl) => (
          <TarjetaEjercicioFlexibilidad key={ejerciciofl.id} ejerciciofl={ejerciciofl} />
        ))}
      </>
    );
  }

export default EjerciciosFlApp