import React, { useState } from "react";
import "./VistaProgreso.css";
import Dropdown from "./Dropdown";
import Tabla from "./Tabla";
import Grafica from "./Grafica";
import BotonCompartir from "./BotonCompartir";
import CabezaCargarProgreso from "./CabezaCargarProgreso";
import NavBarPerfil from "../../general/NavBarPerfil";

const VistaProgreso = ({ idCliente = 1 }) => {
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
			<CabezaCargarProgreso />
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
				<BotonCompartir />
			</div>
			<NavBarPerfil />
		</div>
	);
};

export default VistaProgreso;
