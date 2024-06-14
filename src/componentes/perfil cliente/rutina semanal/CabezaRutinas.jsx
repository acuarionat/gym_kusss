import React from "react";
import "./CabezaRutinas.css";
import { useNavigate } from "react-router-dom";

const CabezaRutinas = ({ contentHeader }) => {
	const navigate = useNavigate();

	const handleGoBack = () => {
		navigate(-1);
	};

	return (
		<div className="headRutinas">
			<button className="goback" onClick={handleGoBack}>
				<img src={"imagenes/FlechaIzquierda.jpg"} alt="Flecha Atras" />
			</button>
            <p className="tituloRutinas">RUTINA</p>
		</div>
	);
};

export default CabezaRutinas;
