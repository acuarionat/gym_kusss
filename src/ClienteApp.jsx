import React, { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import TarjetaCliente from './componentes/perfil entrenador/clientes asignados/TarjetaCliente';

function ClienteApp() {
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

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
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      const parsedUser = JSON.parse(storedUser);
      setUser(parsedUser);
    }
  }, []);

  useEffect(() => {
    if (!user) {
      setLoading(false);
      setError("No user found in localStorage");
      return;
    }

    const fetchClientes = async () => {
      try {
        const entrenadorId = user.id;
        const entrenador = await fetchDataWithRetry(`https://6669267d2e964a6dfed3f9ee.mockapi.io/api/v3/entrenadores/${entrenadorId}`);

        const clienteIds = entrenador.clientes;

        console.log('Client IDs:', clienteIds);

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
  }, [user]);

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
