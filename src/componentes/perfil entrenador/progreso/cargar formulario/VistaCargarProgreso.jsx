import React, { useState, useEffect } from "react";
import TextoCliente from "../cargar grafica/TextoCliente";
import Formulario from "./Formulario";
import BotonGuardar from "./BotonGuardar";
import NavBarPerfilEntrenador from "../../../general/NavBarPerfilEntrenador";
import CabezaCargarProgreso from "../../../perfil cliente/progreso/CabezaCargarProgreso";

const VistaCargarProgreso = () => {
	const [clientes, setClientes] = useState([]);
	const [selectedClient, setSelectedClient] = useState(null);

	useEffect(() => {
		fetch("https://6660e68963e6a0189fe7dc30.mockapi.io/api/v1/table")
			.then((response) => response.json())
			.then((data) => {
				setClientes(data);
				setSelectedClient(data[0]);
			})
			.catch((error) => console.error("Error fetching data: ", error));
	}, []);

	return (
		<div className="vista-cargar-progreso">
			<CabezaCargarProgreso />
			<TextoCliente cliente={selectedClient} />
			<Formulario />
			<BotonGuardar />
			<NavBarPerfilEntrenador />
		</div>
	);
};

export default VistaCargarProgreso;
