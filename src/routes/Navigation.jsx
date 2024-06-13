import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import VistaPerfilCliente from "../componentes/perfil cliente/perfil inicio/VistaPerfilCliente";
import VistaProgreso from "../componentes/perfil cliente/progreso/VistaProgreso";
import Lista_Ejercicios from "../componentes/perfil cliente/ejercicios/VistaListaEjercicios";
import Detalle_Ejercicios from "../componentes/perfil cliente/detalles de ejercicios/VistaDetalleEjercicios";
import VistaEditarPerfil from "../componentes/perfil cliente/editar perfil/VistaEditarPerfil";
import VistaPerfilEntrenador from "../componentes/perfil entrenador/perfil inicio/VistaPerfilEntrenador";
import VistaPerfilClienteEntrenador from "../componentes/perfil entrenador/perfil cliente/VistaPerfilClienteEntrenador";
import VistaClientesAsignados from "../componentes/perfil entrenador/clientes asignados/VistaClientesAsignados";
import RutinaSemanalEntrenador from "../componentes/perfil entrenador/rutina semanal/VistaRutinaSemanalEntrenador";
import VistaProgresoEntrenador from "../componentes/perfil entrenador/progreso/cargar grafica/VistaProgresoEntrenador";
import EditarRutinaEntrenador from "../componentes/perfil entrenador/editar rutina/VistaEditarRutinaEntrenador";
import VistaCargarProgreso from "../componentes/perfil entrenador/progreso/cargar formulario/VistaCargarProgreso";
import VistaVariedadEjercicios from "../componentes/perfil entrenador/ejercicios/VistaVariedadEjercicios";
import SeriesRepeticiones from "../componentes/perfil entrenador/enlistar ejercicios/VistaSeriesRepeticiones";
const Navigation = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/perfil_cliente" element= {<VistaPerfilCliente/>} />
        <Route path="/progreso" element= {<VistaProgreso/>} />
        <Route path="/ejercicios" element= {<Lista_Ejercicios/>} />
        <Route path="/detalle_ejercicios" element= {<Detalle_Ejercicios/>} />
        <Route path="/editar_perfil" element= {<VistaEditarPerfil/>} />
        <Route path="/perfil_entrenador" element= {<VistaPerfilEntrenador/>} />
        <Route path="/perfil_cliente_entrenador" element= {<VistaPerfilClienteEntrenador/>} />
        <Route path="/clientes_asignados" element= {<VistaClientesAsignados/>} />
        <Route path="/rutina_cliente" element= {<RutinaSemanalEntrenador/>} />
        <Route path="/progreso_cliente" element= {<VistaProgresoEntrenador/>} />
        <Route path="/editar_rutina" element= {<EditarRutinaEntrenador/>} />
        <Route path="/cargar_progreso" element= {<VistaCargarProgreso/>} />
        <Route path="/variedad_ejercicios" element= {<VistaVariedadEjercicios/>} />
        <Route path="/editar_perfil" element={<VistaEditarPerfil/>}/>
        <Route path="/editar_ejercicio_rutina" element={<SeriesRepeticiones/>}/>
        </Routes>
    </BrowserRouter>
  );
};

export default Navigation;
