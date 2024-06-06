import React, { useEffect, useState } from 'react';
import TarjetaEjercicioFuerza from './componentes/perfil entrenador/ejercicios/TarjetaEjercicioFuerza';
const EjerciciosFApp = () => {
    const [ejerciciosf, setClientes] = useState([]);

    useEffect(() => {
      fetch('https://665fe2675425580055b13673.mockapi.io/api/v1/ejercicios/')
        .then((res) => res.json())
        .then((data) => {
          const firstFiveClientes = data.slice(0, 5);
          setClientes(firstFiveClientes);
        });
    }, []);
  
    return (
      <>
        {ejerciciosf.map((ejerciciof) => (
          <TarjetaEjercicioFuerza key={ejerciciof.id} ejerciciof={ejerciciof} />
        ))}
      </>
    );
  }
export default EjerciciosFApp