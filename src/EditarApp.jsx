import React, { useEffect, useState } from 'react';
import { ThreeDots } from 'react-loader-spinner';
import FormularioEditarPerfil from './componentes/perfil cliente/editar perfil/FormularioEditarPerfil';

function EditarApp() {
  const [cliente, setCliente] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCliente = async () => {
      try {
        const response = await fetch('https://665fe2675425580055b13673.mockapi.io/api/v1/clientes/3');
        if (!response.ok) {
          throw new Error(`Error: ${response.statusText}`);
        }
        const data = await response.json();
        setCliente(data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchCliente();
  }, []);

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
      {cliente ? (
        <FormularioEditarPerfil key={cliente.id} cliente={cliente} />
      ) : (
        <div>Datos no disponibles.</div>
      )}
    </>
  );
}

export default EditarApp;
