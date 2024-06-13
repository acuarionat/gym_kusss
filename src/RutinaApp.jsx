import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import SemanalEjercicios from './componentes/perfil entrenador/rutina semanal/SemanalEjerciciosEntrenador';

function Rutina() {
  const [cliente, setCliente] = useState(null);
  const [rutinas, setRutinas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  const fetchDataWithRetry = async (url, options = {}, retries = 3, backoff = 3000) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        if (response.status === 429 && retries > 0) {
          console.warn(`Request limit reached. Retrying in ${backoff}ms...`);
          await new Promise(resolve => setTimeout(resolve, backoff));
          return fetchDataWithRetry(url, options, retries - 1, backoff * 2);
        }
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return await response.json();
    } catch (error) {
      console.error('Failed to fetch data:', error);
      throw error;
    }
  };

  const fetchCliente = async (id) => {
    try {
      const data = await fetchDataWithRetry(`https://665fe2675425580055b13673.mockapi.io/api/v1/clientes/${id}`);
      setCliente(data);
      return data.rutinas || [];
    } catch (error) {
      setError(error.message);
      setLoading(false);
    }
  };

  const fetchRutinas = async (rutinaIds) => {
    try {
      const rutinaPromises = rutinaIds.map(id =>
        fetchDataWithRetry(`https://6669267d2e964a6dfed3f9ee.mockapi.io/api/v3/rutina/${id}`)
      );
      const rutinasData = await Promise.all(rutinaPromises);
      setRutinas(rutinasData);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const fetchClienteAndRutinas = async () => {
      if (id) {
        const rutinaIds = await fetchCliente(id);
        if (rutinaIds.length > 0) {
          await fetchRutinas(rutinaIds);
        } else {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    fetchClienteAndRutinas();
  }, [id]);

  if (loading) return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <ThreeDots color="#920525" height={60} width={60} />
    </div>
  );

  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {cliente ? (
        <>
          {rutinas.length > 0 ? (
            rutinas.map(rutina => (
              <SemanalEjercicios key={rutina.id} rutina={rutina} />
            ))
          ) : (
            <div>No hay rutinas disponibles.</div>
          )}
        </>
      ) : (
        <div>Datos no disponibles.</div>
      )}
    </>
  );
}

export default Rutina;
