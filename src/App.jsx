import { useState } from "react";
import "./App.css";
import VistaPerfilCliente from "./componentes/perfil cliente/perfil inicio/VistaPerfilCliente";
import VistaPerfilClienteEntrenador from "./componentes/perfil entrenador/perfil cliente/VistaPerfilClienteEntrenador";
import VistaPerfilEntrenador from "./componentes/perfil entrenador/perfil inicio/VistaPerfilEntrenador";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      {/* <VistaPerfilClienteEntrenador/>  */}
      {/* <VistaPerfilCliente/>  */}
      <VistaPerfilEntrenador />
    </>
  );
}

export default App;
