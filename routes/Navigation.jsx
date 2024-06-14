import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import VistaPerfilCliente from "../componentes/perfil cliente/perfil inicio/VistaPerfilCliente";
import Rutinas from "../src/componentes/perfil cliente/rutina semanal/VistaRutinas";
import VistaProgreso from "../src/componentes/perfil cliente/progreso/VistaProgreso";
import VistaListaEjercicios from "../src/componentes/perfil cliente/ejercicios/VistaListaEjercicios";
import VistaDetalleEjercicios from "../src/componentes/perfil cliente/detalles de ejercicios/VistaDetalleEjercicios";
// import VistaEditarPerfil from "../componentes/perfil cliente/editar perfil/VistaEditarPerfil";
// import VistaPerfilEntrenador from "../componentes/perfil entrenador/perfil inicio/VistaPerfilEntrenador";
// import VistaPerfilClienteEntrenador from "../componentes/perfil entrenador/perfil cliente/VistaPerfilClienteEntrenador";
// import VistaClientesAsignados from "../componentes/perfil entrenador/clientes asignados/VistaClientesAsignados";
// import RutinaSemanalEntrenador from "../componentes/perfil entrenador/rutina semanal/VistaRutinaSemanalEntrenador";
import VistaProgresoEntrenador from "../src/componentes/perfil entrenador/progreso/cargar grafica/VistaProgresoEntrenador";
// import EditarRutinaEntrenador from "../componentes/perfil entrenador/editar rutina/VistaEditarRutinaEntrenador";
import VistaCargarProgreso from "../src/componentes/perfil entrenador/progreso/cargar formulario/VistaCargarProgreso";
// import VistaVariedadEjercicios from "../componentes/perfil entrenador/ejercicios/VistaVariedadEjercicios";
const Navigation = () => {
	return (
		<BrowserRouter>
			<Routes>
				{/* <Route path="/perfil_cliente" element= {<VistaPerfilCliente/>} /> */}
        		<Route path="/rutina" element= {<Rutinas/>} />
				<Route path="/progreso" element={<VistaProgreso />} />
				<Route path="/ejercicios" element= {<VistaListaEjercicios/>} />
				<Route path="/detalle_ejercicios" element= {<VistaDetalleEjercicios/>} />
				{/* <Route path="/editar_perfil" element= {<VistaEditarPerfil/>} />
				<Route path="/perfil_entrenador" element= {<VistaPerfilEntrenador/>} />
				<Route path="/perfil_cliente_entrenador" element= {<VistaPerfilClienteEntrenador/>} />
				<Route path="/clientes_asignados" element= {<VistaClientesAsignados/>} />
				<Route path="/rutina_cliente" element= {<RutinaSemanalEntrenador/>} /> */}
				<Route path="/progreso_cliente" element={<VistaProgresoEntrenador />} />
				{/* <Route path="/editar_rutina" element= {<EditarRutinaEntrenador/>} /> */}
				<Route path="/cargar_progreso" element={<VistaCargarProgreso />} />
				{/* <Route path="/variedad_ejercicios" element= {<VistaVariedadEjercicios/>} /> */}
				{/* <Route path="/editar_perfil" element={<VistaEditarPerfil/>}/> */}
			</Routes>
		</BrowserRouter>
	);
};

export default Navigation;
