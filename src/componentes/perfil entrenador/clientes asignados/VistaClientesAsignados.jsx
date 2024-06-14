import React from "react";
import "./VistaClientesAsignados.css";
import ClienteApp from "../../../ClienteApp";
import CabeceraClientesAsignados from "./CabeceraClientesAsignados";
import NavBarPerfilEntrenador from "../../general/NavBarPerfilEntrenador";

const VistaClientesAsignados = ({cliente}) => {
  return (
    <div className="vista-clientes-asignados">
        <CabeceraClientesAsignados />
        <div className="contenerdor-tarjeta-cliente">
        <ClienteApp cliente={cliente}/>
        </div>
      <NavBarPerfilEntrenador />
    </div>
  );
};

export default VistaClientesAsignados;