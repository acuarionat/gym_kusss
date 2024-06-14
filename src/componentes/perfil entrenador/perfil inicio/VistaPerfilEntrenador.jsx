import React from "react";
import "./VistaPerfilEntrenador.css";
import PerfilDetalleEntrenador from "./PerfilDetalleEntrenador";
import PerfilBienvenidaEntrenador from "./PerfilBienvenidaEntrenador";
import BotonAdministrarClientes from "./BotonAdministrarClientes";
import NavBarPerfilEntrenador from "../../general/NavBarPerfilEntrenador";

const VistaPerfilEntrenador = () => {
  return (
    <div className="vista-perfil-entrenador">
      <div className="superior-perfil-entrenador">
        <PerfilDetalleEntrenador />
        <PerfilBienvenidaEntrenador />
        <BotonAdministrarClientes />
      </div>
      <NavBarPerfilEntrenador />
    </div>
  );
};

export default VistaPerfilEntrenador;
