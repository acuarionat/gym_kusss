import React from "react";
import "./VistaClientesAsignados.css";
import ClienteApp from "../../../ClienteApp";
import CabeceraClientesAsignados from "./CabeceraClientesAsignados";
import NavBarPerfilEntrenador from "../../general/NavBarPerfilEntrenador";

const VistaClientesAsignados = () => {
  return (
    <div className="vista-clientes-asignados">
      <div className="superior">
        <CabeceraClientesAsignados />
        <ClienteApp/>
      </div>
      <NavBarPerfilEntrenador />
    </div>
  );
};

export default VistaClientesAsignados;
