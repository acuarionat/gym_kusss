import React, { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import TarjetaCliente from './componentes/perfil entrenador/clientes asignados/TarjetaCliente';

function ClienteApp() {
  const [entrenador, setEntrenador] = useState(null);
  const [clientes, setClientes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setLoading(false);
      setError('User not found in localStorage');
    }
  }, []);

  useEffect(() => {
    const fetchEntrenador = async () => {
      if (user && user.id) {
        const url = `https://6669267d2e964a6dfed3f9ee.mockapi.io/api/v3/entrenadores/${user.id}`;
        try {
          const response = await fetch(url);
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          setEntrenador(data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      } else {
        setLoading(false);
      }
    };

    if (user) {
      fetchEntrenador();
    }
  }, [user]);

  useEffect(() => {
    const fetchClientes = async () => {
      if (entrenador && entrenador.clientes) {
        try {
          const clientePromises = entrenador.clientes.map(id =>
            fetch(`https://665fe2675425580055b13673.mockapi.io/api/v1/clientes/${id}`).then(response => {
              if (!response.ok) {
                throw new Error('Network response was not ok');
              }
              return response.json();
            })
          );
          const clientesData = await Promise.all(clientePromises);
          setClientes(clientesData);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      }
    };

    if (entrenador) {
      fetchClientes();
    }
  }, [entrenador]);

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
