import React, { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import PerfilDetalleClienteEntrenador from './componentes/perfil entrenador/perfil cliente/PerfilDetalleClienteEntrenador';

function ClienteEntrenadorApp() {
  const [cliente, setCliente] = useState(null);
  let [searchParams, setSearchParams] = useSearchParams();
  const id = searchParams.get("id");

  useEffect(() => {
    if (id) {
      fetch(`https://665fe2675425580055b13673.mockapi.io/api/v1/clientes/${id}`)
        .then((res) => res.json())
        .then((data) => {
          setCliente(data);
        });
    }
  });

  return (
    <>
      {cliente ? (
        <PerfilDetalleClienteEntrenador key={cliente.id} cliente={cliente} />
      ) : (
        <p>Cargando cliente...</p>
      )}
    </>
  );
}

export default ClienteEntrenadorApp;
