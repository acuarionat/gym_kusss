import React from "react";
import TextoAgregarValor from "./TextoAgregarValor";
import BotonAgregarValor from "./BotonAgregarValor";
import "./OpcionAgregarValor.css";

const OpcionAgregarValor = () => {
	return (
		<div className="opcion-agregar-valor">
			<TextoAgregarValor />
			<BotonAgregarValor />
		</div>
	);
};

export default OpcionAgregarValor;
