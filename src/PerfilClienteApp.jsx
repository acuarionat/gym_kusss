import React, { useState, useEffect } from 'react';
import { ThreeDots } from 'react-loader-spinner'; // Asegúrate de tener este paquete instalado
import PerfilDetalleClienteEntrenador from './PerfilDetalleClienteEntrenador'; // Asegúrate de importar tu componente
import { useSearchParams } from 'react-router-dom'; // Asumiendo que estás usando react-router-dom

const PerfilClienteApp = () => {
    const [perfil, setPerfil] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
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
      const id = localStorage.getItem('idUsuario'); // Obtener el ID del cliente desde localStorage
  
      if (id) {
        const fetchPerfil = async () => {
          try {
            const data = await fetchDataWithRetry(`https://665fe2675425580055b13673.mockapi.io/api/v1/clientes/${id}`);
            setPerfil(data);
          } catch (error) {
            setError(error.message);
          } finally {
            setLoading(false);
          }
        };
  
        fetchPerfil();
      } else {
        setLoading(false);
        setError('ID de cliente no disponible en localStorage');
      }
    }, []);
  
    if (loading) return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <ThreeDots color="#920525" height={60} width={60} />
      </div>
    );
  
    if (error) return <div>Error: {error}</div>;
  
    return (
      <>
        {perfil ? (
          <PerfilDetalle key={perfil.id} perfil={perfil} />
        ) : (
          <div>Datos no disponibles.</div>
        )}
      </>
    );
}

export default PerfilClienteApp;
