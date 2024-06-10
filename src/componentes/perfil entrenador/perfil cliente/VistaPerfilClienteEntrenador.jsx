import React from "react";
import "./VistaPerfilClienteEntrenador.css";
import ClienteEntrenadorApp from "../../../ClienteEntrenadorApp";
import InformacionGeneralClienteEntrenador from "./InformacionGeneralClienteEntrenador";
import NavBarPerfilEntrenador from "../../general/NavBarPerfilEntrenador";
import BotonProgreso from "./BotonProgreso";
import BotonRutina from "./BotonRutina";

const VistaPerfilClienteEntrenador = ({cliente}) => {
  return (
    <div className="vista-cliente-entrenador">
      <div className="superior">
        <ClienteEntrenadorApp cliente={cliente} />
        <InformacionGeneralClienteEntrenador />
        <BotonProgreso />
        <BotonRutina />
      </div>
      <NavBarPerfilEntrenador />
    </div>
  );
};

export default VistaPerfilClienteEntrenador;
