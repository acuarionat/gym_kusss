import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VistaPerfilCliente from "../componentes/perfil cliente/perfil inicio/VistaPerfilCliente";
import Rutinas from "../componentes/perfil cliente/rutina semanal/VistaRutinas";
import VistaProgreso from "../componentes/perfil cliente/progreso/VistaProgreso";
import Lista_Ejercicios from "../componentes/perfil cliente/ejercicios/VistaListaEjercicios";
import Detalle_Ejercicios from "../componentes/perfil cliente/detalles de ejercicios/VistaDetalleEjercicios";
import VistaEditarPerfil from "../componentes/perfil cliente/editar perfil/VistaEditarPerfil";
const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/perfil_cliente" element= {<VistaPerfilCliente/>} />
        <Route path="/rutina" element= {<Rutinas/>} />
        <Route path="/progreso" element= {<VistaProgreso/>} />
        <Route path="/ejercicios" element= {<Lista_Ejercicios/>} />
        <Route path="/detalle_ejercicios" element= {<Detalle_Ejercicios/>} />
        <Route path="/editar_perfil" element= {<VistaEditarPerfil/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
