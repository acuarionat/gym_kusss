import React from "react";
import "./VistaProgreso.css";
import Icono from "./Icono";

const BotonCompartir = () => {
	return (
		<div className="boton-container">
			<button>
				<Icono />
				COMPARTE TU PROGRESO
			</button>
		</div>
	);
};

export default BotonCompartir;
