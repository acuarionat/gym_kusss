import React from "react";
import "./VistaProgreso.css";
import Dropdown from "./Dropdown";
import Tabla from "./Tabla";
import Grafica from "./Grafica";
import BotonCompartir from "./BotonCompartir";
import CabezaCargarProgreso from "./CabezaCargarProgreso";
import NavBarPerfil from "../../general/NavBarPerfil";
const VistaProgreso = () => {
  return (
    <div className="vista-progreso">
      <CabezaCargarProgreso />
      <div className="superior-progreso">
        <Dropdown />
        <Grafica />
        <Tabla />
        <BotonCompartir />
      </div>
      <NavBarPerfil />
    </div>
  );
};

export default VistaProgreso;