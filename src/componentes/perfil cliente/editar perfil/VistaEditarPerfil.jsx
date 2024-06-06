import React from "react";
import "./VistaEditarPerfil.css";
import NavBarPerfil from "../../general/NavBarPerfil";
import CabeceraEditarPerfil from "./CabeceraEditarPerfil";
import FormularioEditarPerfil from "./FormularioEditarPerfil";
import AvatarPerfil from "./AvatarPerfil";
const VistaEditarPerfil = () => {
  return (
    <div className="vista-editar">
      <div className="superior-editar">
        <CabeceraEditarPerfil />
        <AvatarPerfil/>
        <FormularioEditarPerfil />
      </div>
      <NavBarPerfil />
    </div>
  );
};

export default VistaEditarPerfil;
