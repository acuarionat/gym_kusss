import React from "react";
import "./BotonCompartir.css";
import IconoCompartir from "./IconoCompartir";

const BotonCompartir = () => {
	return (
		<div className="boton-container">
			<button>
				<IconoCompartir/>
				COMPARTE TU PROGRESO
			</button>
		</div>
	);
};

export default BotonCompartir;
