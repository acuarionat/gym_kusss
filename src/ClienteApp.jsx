import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ThreeDots } from 'react-loader-spinner';
import TarjetaCliente from './componentes/perfil entrenador/clientes asignados/TarjetaCliente';

function ClienteApp() {
  const [clientes, setClientes] = useState([]);
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
    const fetchClientes = async () => {
      try {
        // Fetch the data of the trainer with id 1
        const entrenador = await fetchDataWithRetry('https://6669267d2e964a6dfed3f9ee.mockapi.io/api/v3/entrenadores/2');

        // Extract the array of client IDs from the trainer data
        const clienteIds = entrenador.clientes; // Assuming 'clientes' is the key that contains the array of client IDs

        // Fetch the data of each client using the IDs
        const clientePromises = clienteIds.map(id =>
          fetchDataWithRetry(`https://665fe2675425580055b13673.mockapi.io/api/v1/clientes/${id}`)
        );
        
        const clientesData = await Promise.all(clientePromises);
        console.log('Clientes Data:', clientesData);

        setClientes(clientesData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchClientes();
  }, []);

  if (loading) return <ThreeDots color="#920525" height={80} width={80} />;
  if (error) return <div>Error: {error}</div>;

  return (
    <>
      {clientes.map((cliente) => (
        <TarjetaCliente key={cliente.id} cliente={cliente} />
      ))}
    </>
  );
}

export default ClienteApp;
