import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import './VistaListaEjercicios.css';
import CabezaListaEjercicios from './CabezaListaEjercicios';
import NavBarPerfil from '../../general/NavBarPerfil';
import TarjetaDeEjercicios from './TarjetaDeEjerciciosCliente';

function VistaListaEjercicios() {
  const location = useLocation();
  const { ejercicios } = location.state || { ejercicios: [] };
  const [detallesEjercicios, setDetallesEjercicios] = useState([]);

  useEffect(() => {
    const fetchEjercicios = async () => {
      try {
        const response = await fetch('https://665fe2675425580055b13673.mockapi.io/api/v1/ejercicios');
        const data = await response.json();

        if (Array.isArray(data)) {
          const ejerciciosFiltrados = data.filter(ejercicio => ejercicios.includes(Number(ejercicio.id)));
          setDetallesEjercicios(ejerciciosFiltrados);
        } else {
          console.error('Data is not an array:', data);
        }
      } catch (error) {
        console.error('Error fetching exercises:', error);
      }
    };

    if (ejercicios.length > 0) {
      fetchEjercicios();
    }
  }, [ejercicios]);

  return (
    <div className="principalLista">
      <div className="superior-lista-ejer">
        <CabezaListaEjercicios />
        <TarjetaDeEjercicios ejercicios={detallesEjercicios} />
      </div>
      <NavBarPerfil />
    </div>
  );
}

export default VistaListaEjercicios;