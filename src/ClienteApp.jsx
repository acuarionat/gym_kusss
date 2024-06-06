import React, { useEffect, useState } from 'react';
import TarjetaCliente from './componentes/perfil entrenador/clientes asignados/TarjetaCliente';

function ClienteApp() {
  const [clientes, setClientes] = useState([]);

  useEffect(() => {
    fetch('https://665fe2675425580055b13673.mockapi.io/api/v1/clientes')
      .then((res) => res.json())
      .then((data) => {
        const firstFiveClientes = data.slice(0, 5);
        setClientes(firstFiveClientes);
      });
  }, []);

  return (
    <>
      {clientes.map((cliente) => (
        <TarjetaCliente key={cliente.id} cliente={cliente} />
      ))}
    </>
  );
}

export default ClienteApp;
