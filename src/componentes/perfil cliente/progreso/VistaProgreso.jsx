import React from "react";
import Dropdown from "./Dropdown";
import Tabla from "./Tabla";
import Grafica from "./Grafica";
import BotonCompartir from './BotonCompartir'
import CabezaCargarProgreso from './CabezaCargarProgreso'
import NavBarPerfil from '../../general/NavBarPerfil'
const VistaProgreso = () => {
	return (
		<div className="vista-cargar-progreso">
			<CabezaCargarProgreso/>
			<Dropdown/>
			<Grafica/>
			<Tabla/>
			<BotonCompartir/>
      <NavBarPerfil/>
		</div>
	);
};

export default VistaProgreso;
