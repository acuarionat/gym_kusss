import React, { useState } from "react";
import "./VistaProgreso.css";
import Dropdown from "./Dropdown";
import Tabla from "./Tabla";
import Grafica from "./Grafica";
import BotonCompartir from "./BotonCompartir";
import NavBarPerfil from "../../general/NavBarPerfil";
import CabezaCargarProgreso from "./CabezaCargarProgreso";

const VistaProgreso = ({ idCliente = 1 }) => {
	const url = window.location.href;
	const title = "Mira mi progreso!";

	const contentHeader = "PROGRESO";
	const [selectedProgreso, setSelectedProgreso] = useState("");
	const [selectedOption, setSelectedOption] = useState("");

	const handleProgresoSelect = (progreso) => {
		setSelectedProgreso(progreso);
		setSelectedOption("");
	};

	const handleOptionSelect = (option) => {
		setSelectedOption(option);
	};

	return (
		<div className="vista-progreso">
			<CabezaCargarProgreso contentHeader={contentHeader} />
			<div className="superior-progreso">
				<Dropdown
					onProgresoSelect={handleProgresoSelect}
					onOptionSelect={handleOptionSelect}
				/>
				{selectedProgreso && (
					<Grafica
						idCliente={idCliente}
						selectedProgreso={selectedProgreso}
						selectedOption={selectedOption}
					/>
				)}
				{selectedProgreso && (
					<Tabla
						idCliente={idCliente}
						selectedProgreso={selectedProgreso}
						selectedOption={selectedOption}
					/>
				)}
				{!selectedProgreso && (
					<>
						<Grafica
							idCliente={idCliente}
							selectedProgreso="perdida_peso"
							selectedOption=""
						/>
						<Tabla
							idCliente={idCliente}
							selectedProgreso="perdida_peso"
							selectedOption=""
						/>
					</>
				)}
				<BotonCompartir url={url} title={title} />
			</div>
			<NavBarPerfil />
		</div>
	);
};

export default VistaProgreso;
