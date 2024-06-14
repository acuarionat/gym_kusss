import React, { useState, useEffect } from "react";
import axios from "axios";
import "./FormularioCargarProgreso.css";
import BotonGuardar from "./BotonGuardar";

const FormularioCargarProgreso = ({ selectedProgreso, selectedOption }) => {
	const [fecha, setFecha] = useState("");
	const [valor, setValor] = useState("");
	const [unidad, setUnidad] = useState("kg");
	const [clientes, setClientes] = useState([]);

	// Simular carga de datos de clientes desde una API
	useEffect(() => {
		const fetchClientes = async () => {
			try {
				const response = await axios.get(
					`https://6660e68963e6a0189fe7dc30.mockapi.io/api/v1/progreso`
				);
				if (response.status === 200) {
					setClientes(response.data);
				} else {
					console.error("Error al obtener clientes desde la API");
				}
			} catch (error) {
				console.error("Error al obtener clientes: ", error);
			}
		};

		fetchClientes();
	}, []);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const cliente = clientes[0];

		const progresoSeleccionado = selectedProgreso
			.toLowerCase()
			.replace(/\s+/g, "_");

		const seguimientos = cliente.seguimientos[progresoSeleccionado];

		if (!seguimientos) {
			console.error(
				`No se encontró el tipo de progreso "${selectedProgreso}" en los seguimientos.`
			);
			return;
		}

		const seguimientosArray = Array.isArray(seguimientos) ? seguimientos : [];

		const nuevoSeguimiento = {
			id_fecha: Date.now(),
			fecha_seguimiento: fecha,
		};

		if (selectedOption === "Altura") {
			nuevoSeguimiento.altura = parseFloat(valor);
		} else if (selectedOption === "Peso") {
			nuevoSeguimiento.peso = parseFloat(valor);
		} else if (selectedOption === "Fuerza") {
			nuevoSeguimiento.fuerza = parseFloat(valor);
		} else {
			console.error("Opción seleccionada no reconocida");
			return;
		}

		const nuevosSeguimientos = [...seguimientosArray, nuevoSeguimiento];

		const data = {
			...cliente,
			seguimientos: {
				...cliente.seguimientos,
				[progresoSeleccionado]: nuevosSeguimientos,
			},
		};

		try {
			const response = await axios.put(
				`https://6660e68963e6a0189fe7dc30.mockapi.io/api/v1/progreso/${cliente.id}`,
				data
			);

			if (response.status === 200) {
				alert("Progreso guardado con éxito");
			} else {
				alert("Error al guardar el progreso");
			}
		} catch (error) {
			console.error("Error al guardar el progreso: ", error);
			alert("Error al guardar el progreso");
		}
	};

	return (
		<div className="formulario-progreso">
			<form onSubmit={handleSubmit}>
				<div className="fecha-input">
					<label htmlFor="fecha">Fecha:</label>
					<input
						type="date"
						id="fecha"
						name="fecha"
						value={fecha}
						onChange={(e) => setFecha(e.target.value)}
						style={{ maxWidth: "327px" }}
					/>
				</div>
				<div className="valor-unidad">
					<div className="valor-input">
						<label htmlFor="valor">Valor:</label>
						<input
							type="number"
							id="valor"
							name="valor"
							value={valor}
							onChange={(e) => setValor(e.target.value)}
							style={{ width: "143px" }}
						/>
					</div>
					<div className="unidad-medida-select">
						<label htmlFor="unidadMedida">Unidad Medida:</label>
						<div className="select-wrapper" style={{ width: "143px" }}>
							<select
								id="unidadMedida"
								name="unidadMedida"
								value={unidad}
								onChange={(e) => setUnidad(e.target.value)}
								style={{ width: "100%" }}
							>
								<option value="kg">Kilogramos</option>
								<option value="min">Minutos</option>
								<option value="cm">Centímetros</option>
								<option value="%">Porcentaje</option>
								<option value="min">Minutos</option>
								<option value="km">Kilómetros</option>
							</select>
						</div>
					</div>
				</div>
				<BotonGuardar />
			</form>
		</div>
	);
};

export default FormularioCargarProgreso;
