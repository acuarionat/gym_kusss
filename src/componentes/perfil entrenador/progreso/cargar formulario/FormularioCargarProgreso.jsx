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
        const response = await axios.get(`https://6660e68963e6a0189fe7dc30.mockapi.io/api/v1/progreso`);
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

    // Encontrar el cliente (en este caso, suponemos que trabajamos con el primer cliente del array)
    const cliente = clientes[0]; // Cambiar esto si necesitas manejar múltiples clientes

    // Normalizar el nombre del progreso seleccionado a minúsculas y reemplazar espacios con guiones bajos
    const progresoSeleccionado = selectedProgreso.toLowerCase().replace(/\s+/g, '_');

    // Encontrar el tipo de progreso dentro de los seguimientos del cliente
    const seguimientos = cliente.seguimientos[progresoSeleccionado];

    // Verificar si existe el tipo de progreso seleccionado en los seguimientos del cliente
    if (!seguimientos) {
      console.error(`No se encontró el tipo de progreso "${selectedProgreso}" en los seguimientos.`);
      return;
    }

    // Asegurarse de que seguimientos sea un array antes de manipularlo
    const seguimientosArray = Array.isArray(seguimientos) ? seguimientos : [];

    // Construir el objeto de nuevo seguimiento
    const nuevoSeguimiento = {
      id_fecha: Date.now(), // Simulamos un ID de fecha único
      fecha_seguimiento: fecha,
    };

    // Añadir la opción seleccionada y su valor al nuevo seguimiento
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

    // Actualizar los seguimientos existentes con el nuevo seguimiento
    const nuevosSeguimientos = [...seguimientosArray, nuevoSeguimiento];

    // Preparar los datos actualizados del cliente para enviar a la API
    const data = {
      ...cliente,
      seguimientos: {
        ...cliente.seguimientos,
        [progresoSeleccionado]: nuevosSeguimientos,
      },
    };

    try {
      const response = await axios.put(`https://6660e68963e6a0189fe7dc30.mockapi.io/api/v1/progreso/${cliente.id}`, data);
      
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
    <form className="formulario" onSubmit={handleSubmit}>
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
  );
};

export default FormularioCargarProgreso;
