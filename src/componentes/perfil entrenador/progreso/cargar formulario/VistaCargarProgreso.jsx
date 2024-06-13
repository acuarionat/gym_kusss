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
		fetch("https://665fe2675425580055b13673.mockapi.io/api/v1/clientes")
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
