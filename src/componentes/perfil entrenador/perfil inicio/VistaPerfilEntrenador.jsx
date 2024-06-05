import React from "react";
import PerfilDetalleEntrenador from "./PerfilDetalleEntrenador";
import PerfilBienvenidaEntrenador from "./PerfilBienvenidaEntrenador";
import BotonAdministrarClientes from "./BotonAdministrarClientes";
import NavBarPerfilEntrenador from "../../general/NavBarPerfilEntrenador";

const VistaPerfilEntrenador = () => {
  return (
    <div className="vista-perfil-entrenador">
      <div className="superior">
        <PerfilDetalleEntrenador />
        <PerfilBienvenidaEntrenador />
        <BotonAdministrarClientes />
      </div>
      <NavBarPerfilEntrenador />
    </div>
  );
};

export default VistaPerfilEntrenador;
