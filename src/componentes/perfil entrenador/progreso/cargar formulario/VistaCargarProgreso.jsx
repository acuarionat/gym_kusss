import React, { useState, useEffect } from "react";
import FormularioCargarProgreso from "./FormularioCargarProgreso";
import NavBarPerfilEntrenador from "../../../general/NavBarPerfilEntrenador";
import CabezaCargarProgreso from "../../../perfil entrenador/progreso/CabezaCargarProgreso";
import { useLocation } from "react-router-dom";

const VistaCargarProgreso = () => {
    const contentHeader = "CARGAR PROGRESO";
    const location = useLocation();
    const { idCliente, selectedProgreso, selectedOption } = location.state || {};

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
            <div className="title">
                <h2>
                    Cliente: <span>{selectedClient ? selectedClient.name : "Cargando..."}</span>
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
