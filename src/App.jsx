import { useState } from "react";
import './App.css'
import NavBarPerfil from './componentes/general/NavBarPerfil'
import PerfilBienvenida from './componentes/perfil cliente/perfil inicio/PerfilBienvenida'
import PerfilDetalle from './componentes/perfil cliente/perfil inicio/PerfilDetalle'
import InformacionGeneral from "./componentes/perfil cliente/perfil inicio/InformacionGeneral"
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <PerfilDetalle />
      <PerfilBienvenida />
      <InformacionGeneral/>
      <NavBarPerfil />
    </>
  );
}

export default App
