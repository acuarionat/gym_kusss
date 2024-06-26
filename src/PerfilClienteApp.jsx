import React, { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import PerfilDetalle from './componentes/perfil cliente/perfil inicio/PerfilDetalle';

const PerfilClienteApp = () => {
  const [perfil, setPerfil] = useState(null);
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
  }, []); // Solo se ejecuta una vez al montar el componente

  useEffect(() => {
    const fetchPerfil = async () => {
      if (user && user.id) {
        const url = `https://665fe2675425580055b13673.mockapi.io/api/v1/clientes/${user.id}`;
        try {
          const data = await fetchDataWithRetry(url);
          setPerfil(data);
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
      fetchPerfil();
    }
  }, [user]); // Se ejecuta cuando el usuario cambia

  const fetchDataWithRetry = async (url, options = {}, retries = 3, backoff = 3000) => {
    try {
      const response = await fetch(url, options);
      if (!response.ok) {
        if (response.status === 429 && retries > 0) {
          console.warn(`Request limit reached. Retrying in ${backoff}ms...`);
          await new Promise((resolve) => setTimeout(resolve, backoff));
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

  if (loading) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <ThreeDots color="#920525" height={60} width={60} />
      </div>
    );
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      {perfil ? (
        <PerfilDetalle key={perfil.id} perfil={perfil} />
      ) : (
        <div>Datos no disponibles.</div>
      )}
    </>
  );
};

export default PerfilClienteApp;
