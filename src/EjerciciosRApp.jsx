import React, { useEffect, useState } from 'react';
import TarjetaEjercicioResistencia from './componentes/perfil entrenador/ejercicios/TarjetaEjercicioResistencia';
const EjerciciosRApp = () => {
    const [ejerciciosr, setEjercicios] = useState([]);

    useEffect(() => {
      fetch('https://665fe2675425580055b13673.mockapi.io/api/v1/ejercicios/')
        .then((res) => res.json())
        .then((data) => {
          const seisejerciciosFiltrados = data.filter(ejercicios => ejercicios.id >= 11 && ejercicios.id <= 20);
          setEjercicios(seisejerciciosFiltrados);
        });
    }, []);
  
    return (
      <>
        {ejerciciosr.map((ejercicior) => (
          <TarjetaEjercicioResistencia key={ejercicior.id} ejercicior={ejercicior} />
        ))}
      </>
    );
  }

export default EjerciciosRApp