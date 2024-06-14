import React, { useState, useEffect } from "react";
import "./VistaProgresoEntrenador.css";
import Dropdown from "./Dropdown";
import Tabla from "./Tabla";
import Grafica from "./Grafica";
import OpcionAgregarValor from "./OpcionAgregarValor";
import NavBarPerfilEntrenador from "../../../general/NavBarPerfilEntrenador";
import CabezaCargarProgreso from "../../../perfil entrenador/progreso/CabezaCargarProgreso";

const VistaProgresoEntrenador = ({ idCliente = 1 }) => {
    const contentHeader = "CARGAR PROGRESO";
    const [selectedProgreso, setSelectedProgreso] = useState("");
    const [selectedOption, setSelectedOption] = useState("");

    const handleProgresoSelect = (progreso) => {
        setSelectedProgreso(progreso);
        setSelectedOption("");
    };

    const handleOptionSelect = (option) => {
        setSelectedOption(option);
    };

    //Para simular que por props llego el data del cliente 1
    const [clientes, setClientes] = useState([]);
    const [selectedClient, setSelectedClient] = useState(null);

    useEffect(() => {
        fetch("https://665fe2675425580055b13673.mockapi.io/api/v1/clientes")
            .then((response) => response.json())
            .then((data) => {
                setClientes(data);
                const client = data.find(cliente => cliente.id === idCliente.toString());
                setSelectedClient(client);
            })
            .catch((error) => console.error("Error fetching data: ", error));
    }, [idCliente]);

    return (
        <div className="vista-cargar-progreso">
            <CabezaCargarProgreso contentHeader={contentHeader} />
            <div className="superior-cargar-progreso">
                <div className="title">
                    <h2>
                        Cliente: <span>{selectedClient ? selectedClient.name : "Cargando..."}</span>
                    </h2>
                </div>
                <Dropdown
                    onProgresoSelect={handleProgresoSelect}
                    onOptionSelect={handleOptionSelect}
                />
                {selectedProgreso && (
                    <Grafica
                        idCliente={idCliente}
                        selectedProgreso={selectedProgreso}
                        selectedOption={selectedOption}
                    />
                )}
                {selectedProgreso && (
                    <Tabla
                        idCliente={idCliente}
                        selectedProgreso={selectedProgreso}
                        selectedOption={selectedOption}
                    />
                )}
                {!selectedProgreso && (
                    <>
                        <Grafica
                            idCliente={idCliente}
                            selectedProgreso="perdida_peso"
                            selectedOption=""
                        />
                        <Tabla
                            idCliente={idCliente}
                            selectedProgreso="perdida_peso"
                            selectedOption=""
                        />
                    </>
                )}
                <OpcionAgregarValor
                    idCliente={idCliente}
                    selectedProgreso={selectedProgreso}
                    selectedOption={selectedOption}
                />
            </div>
            <NavBarPerfilEntrenador />
        </div>
    );
};

export default VistaProgresoEntrenador;
