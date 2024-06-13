import React, { useState, useEffect } from "react";
import "./VistaProgresoEntrenador.css";
import Dropdown from "./Dropdown";
import Tabla from "./Tabla";
import Grafica from "./Grafica";
import OpcionAgregarValor from "./OpcionAgregarValor";
import TextoCliente from "./TextoCliente";
import NavBarPerfilEntrenador from "../../../general/NavBarPerfilEntrenador";
import CabezaCargarProgreso from "../../../perfil cliente/progreso/CabezaCargarProgreso";

const VistaProgresoEntrenador = ({ idCliente = 1 }) => {
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
			<div className="superior-cargar-progreso">
				<TextoCliente cliente={selectedClient} />
				<Dropdown />
				<Grafica idCliente={idCliente} />
				<Tabla idCliente={idCliente} />
				<OpcionAgregarValor />
			</div>
			<NavBarPerfilEntrenador />
		</div>
	);
};

export default VistaProgresoEntrenador;
