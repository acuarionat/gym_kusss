import React from "react";
import './VistaPerfilCliente.css'
import PerfilBienvenida from "./PerfilBienvenida";
import PerfilClienteApp from "../../../PerfilClienteApp";
import NavBarPerfil from "../../general/NavBarPerfil";
const VistaPerfilCliente = ({perfil}) => {
  return (
    <div className="vista-perfil">
      <div className="superior-perfil-cliente">
      <PerfilClienteApp perfil={perfil} />
      <PerfilBienvenida />
    </div>
      <NavBarPerfil />
    </div>
  );
};

export default VistaPerfilCliente;
