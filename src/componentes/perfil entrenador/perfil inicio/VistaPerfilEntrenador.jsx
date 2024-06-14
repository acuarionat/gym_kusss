import React from "react";
import "./VistaPerfilEntrenador.css";
import PerfilBienvenidaEntrenador from "./PerfilBienvenidaEntrenador";
import BotonAdministrarClientes from "./BotonAdministrarClientes";
import NavBarPerfilEntrenador from "../../general/NavBarPerfilEntrenador";
import PerfilEntrenadorApp from "../../../PerfilEntrenadorApp";

const VistaPerfilEntrenador = ({entrenador}) => {
  return (
    <div className="vista-perfil-entrenador">
      <div className="superior-perfil-entrenador">
        <PerfilEntrenadorApp entrenador={entrenador}/>
        <PerfilBienvenidaEntrenador />
        <BotonAdministrarClientes />
      </div>
      <NavBarPerfilEntrenador />
    </div>
  );
};

export default VistaPerfilEntrenador;
