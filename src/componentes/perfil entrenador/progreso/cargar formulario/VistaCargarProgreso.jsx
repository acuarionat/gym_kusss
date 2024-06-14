import React, { useState, useEffect } from "react";
import FormularioCargarProgreso from "./FormularioCargarProgreso";
import NavBarPerfilEntrenador from "../../../general/NavBarPerfilEntrenador";
import CabezaCargarProgreso from "../../../perfil cliente/progreso/CabezaCargarProgreso";
import { useLocation } from "react-router-dom";

const VistaCargarProgreso = ({idCliente=1}) => {
	const location = useLocation();
	const { idCliente, selectedProgreso, selectedOption } = location.state || {};
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
			<div className="title">
				<h2>
					Cliente: <span>{idCliente ? idCliente.name : "Cargando..."}</span>
				</h2>
			</div>
			<FormularioCargarProgreso
				idCliente={idCliente}
				selectedProgreso={selectedProgreso}
				selectedOption={selectedOption}
			/>
			<NavBarPerfilEntrenador />
		</div>
	);
};

export default VistaCargarProgreso;
