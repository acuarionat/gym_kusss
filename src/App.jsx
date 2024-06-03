import { useState } from "react";
import './App.css'
import VistaPerfilCliente from "./componentes/perfil cliente/perfil inicio/VistaPerfilCliente";
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <VistaPerfilCliente/>
    </>
  );
}

export default App
