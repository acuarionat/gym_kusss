import React from "react";
import "./VistaEditarPerfil.css";
import NavBarPerfil from "../../general/NavBarPerfil";
import CabeceraEditarPerfil from "./CabeceraEditarPerfil";
import EditarApp from "../../../EditarApp";
const VistaEditarPerfil = ({cliente}) => {
  return (
    <div className="vista-editar">
        <CabeceraEditarPerfil/>
        <EditarApp cliente={cliente} />
      <NavBarPerfil />
    </div>
  );
};

export default VistaEditarPerfil;
