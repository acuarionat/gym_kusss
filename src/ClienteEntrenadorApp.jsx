import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import PerfilDetalleClienteEntrenador from './componentes/perfil entrenador/perfil cliente/PerfilDetalleClienteEntrenador';

function ClienteEntrenadorApp() {
  const [cliente, setCliente] = useState(null);
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

  useEffect(() => {
    if (id) {
      const fetchCliente = async () => {
        try {
          const data = await fetchDataWithRetry(`https://665fe2675425580055b13673.mockapi.io/api/v1/clientes/${id}`);
          setCliente(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };

      fetchCliente();
    } else {
      setLoading(false);
    }
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
        <PerfilDetalleClienteEntrenador key={cliente.id} cliente={cliente} />
      ) : (
        <div>Datos no disponibles.</div>
      )}
    </>
  );
}

export default ClienteEntrenadorApp;
