import React from "react";
import NavBarPerfilEntrenador from "../../general/NavBarPerfilEntrenador";
import CabeceraVariedadEjercicios from "./CabeceraVariedadEjercicios";
import ComboBoxTipoEjer from "./ComboBoxTipoEjer";
import "./VistaVariedadEjercicios.css";
const VistaVariedadEjercicios = () => {
  return (
    <div className="vista-ejercicios">
      <CabeceraVariedadEjercicios />
      <ComboBoxTipoEjer />
      <NavBarPerfilEntrenador />
    </div>
  );
};

export default VistaVariedadEjercicios;
