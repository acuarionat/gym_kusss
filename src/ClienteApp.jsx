import React, {useEffect,useState} from 'react'
import TarjetaCliente from './componentes/perfil entrenador/clientes asignados/TarjetaCliente';

function ClienteApp() {
const [clientes,setCliente]=useState([]);

useEffect(()=>{
    fetch('https://665f2be31e9017dc16f32838.mockapi.io/personas')
    .then((res)=>res.json())
    .then((data)=>{
        setCliente(data);
    })
})
  return (
    <>
    {clientes.map((cliente) => (
      <TarjetaCliente key={cliente.id} cliente={cliente} />
    ))}
  </>

  )
}

export default ClienteApp