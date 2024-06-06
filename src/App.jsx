import { useState } from "react";
import "./App.css";
import VistaPerfilCliente from "./componentes/perfil cliente/perfil inicio/VistaPerfilCliente";
import VistaPerfilClienteEntrenador from "./componentes/perfil entrenador/perfil cliente/VistaPerfilClienteEntrenador";
import VistaPerfilEntrenador from "./componentes/perfil entrenador/perfil inicio/VistaPerfilEntrenador";
import ClienteApp from "./ClienteApp";
import VistaClientesAsignados from "./componentes/perfil entrenador/clientes asignados/VistaClientesAsignados";

function App() {
  return (
    <>
     {/* <VistaPerfilClienteEntrenador/>  */}
       {/* <VistaPerfilCliente/> */}  
      {/*  <VistaPerfilEntrenador />  */}
     <VistaClientesAsignados/>  
    </>
  );
}

export default App;
