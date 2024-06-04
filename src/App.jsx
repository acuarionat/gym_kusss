import { useState } from "react";
import './App.css'
/* import VistaPerfilCliente from "./componentes/perfil cliente/perfil inicio/VistaPerfilCliente";
*/import VistaPerfilClienteEntrenador from "./componentes/perfil entrenador/perfil cliente/VistaPerfilClienteEntrenador";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <VistaPerfilClienteEntrenador/>
      {/* <VistaPerfilCliente/> */}
    </>
  );
}

export default App
