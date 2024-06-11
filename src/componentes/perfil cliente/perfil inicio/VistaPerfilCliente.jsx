import React from "react";
import './VistaPerfilCliente.css'
import PerfilBienvenida from "./PerfilBienvenida";
import PerfilDetalle from "./PerfilDetalle";
import InformacionGeneral from "./InformacionGeneral";
import NavBarPerfil from "../../general/NavBarPerfil";
const VistaPerfilCliente = () => {
  return (
    <div className="vista-perfil">
      <div className="superior-perfil-cliente">
      <PerfilDetalle />
      <PerfilBienvenida />
      <InformacionGeneral />
    </div>
      <NavBarPerfil />
    </div>
  );
};

export default VistaPerfilCliente;
