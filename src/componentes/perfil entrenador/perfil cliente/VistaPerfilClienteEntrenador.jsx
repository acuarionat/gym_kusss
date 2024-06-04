import React from "react";
import './VistaPerfilClienteEntrenador.css'
import PerfilDetalleClienteEntrenador from "./PerfilDetalleClienteEntrenador";
import InformacionGeneralClienteEntrenador from "./InformacionGeneralClienteEntrenador";
import NavBarPerfilEntrenador from "../../general/NavBarPerfilEntrenador";
import BotonProgreso from "./BotonProgreso";
import BotonRutina from "./BotonRutina";
const VistaPerfilClienteEntrenador = () => {
  return (
    <div className="vista-cliente-entrenador">
      <PerfilDetalleClienteEntrenador />
      <InformacionGeneralClienteEntrenador />
      <NavBarPerfilEntrenador />
      <BotonProgreso/>
      <BotonRutina/>
    </div>
  );
};

export default VistaPerfilClienteEntrenador;
