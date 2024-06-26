import React from "react";
import "./VistaPerfilClienteEntrenador.css";
import ClienteEntrenadorApp from "../../../ClienteEntrenadorApp";
import InformacionGeneralClienteEntrenador from "./InformacionGeneralClienteEntrenador";
import NavBarPerfilEntrenador from "../../general/NavBarPerfilEntrenador";
import BotonEjercicios from "./BotonEjercicios";
/* import BotonRutina from "./BotonRutina";
 */
const VistaPerfilClienteEntrenador = () => {
  return (
    <div className="vista-cliente-entrenador">
      <div className="superior-cliente-entrenador">
        <ClienteEntrenadorApp  />
        <InformacionGeneralClienteEntrenador />
        <BotonEjercicios/>
   </div>
      <NavBarPerfilEntrenador />
    </div>
  );
};

export default VistaPerfilClienteEntrenador;
