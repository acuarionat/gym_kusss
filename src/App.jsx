import { useState } from "react";
import './App.css'
import NavBarPerfil from './componentes/perfil cliente/perfil inicio/NavBarPerfil'
import PerfilBienvenida from './componentes/perfil cliente/perfil inicio/PerfilBienvenida'
import PerfilDetalle from './componentes/perfil cliente/perfil inicio/PerfilDetalle'
import PerfilInfo from './componentes/perfil cliente/perfil inicio/PerfilInfo'
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <PerfilDetalle />
      <PerfilBienvenida />
      <PerfilInfo/>
      <NavBarPerfil />
    </>
  );
}

export default App
