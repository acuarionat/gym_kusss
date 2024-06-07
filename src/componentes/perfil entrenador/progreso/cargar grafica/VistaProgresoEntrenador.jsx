import React, { useState, useEffect } from "react";
import './VistaProgresoEntrenador.css'
import Dropdown from "./Dropdown";
import Tabla from "./Tabla";
import Grafica from "./Grafica";
import OpcionAgregarValor from "./OpcionAgregarValor";
import TextoCliente from "./TextoCliente";
import NavBarPerfilEntrenador from "../../../general/NavBarPerfilEntrenador";
import CabezaCargarProgreso from "../../../perfil cliente/progreso/CabezaCargarProgreso";

const VistaProgresoEntrenador = () => {
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
		 <div className="superior-cargar-progreso">
      <CabezaCargarProgreso />
        <TextoCliente cliente={selectedClient} />
        <Dropdown />
        <Grafica />
        <Tabla />
        <OpcionAgregarValor />
      </div>
      <NavBarPerfilEntrenador />
    </div>
  );
};

export default VistaProgresoEntrenador;
