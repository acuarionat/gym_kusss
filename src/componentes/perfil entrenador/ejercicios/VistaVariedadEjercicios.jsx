import React from "react";
import NavBarPerfilEntrenador from "../../general/NavBarPerfilEntrenador";
import CabeceraVariedadEjercicios from "./CabeceraVariedadEjercicios";
import ComboBoxTipoEjer from "./ComboBoxTipoEjer";
const VistaVariedadEjercicios = () => {
  return (
    <div className="vista-ejercicios">
      <div className="superior-ejer">
        <CabeceraVariedadEjercicios />
        <ComboBoxTipoEjer/>
      </div>
      <NavBarPerfilEntrenador />
    </div>
  );
};

export default VistaVariedadEjercicios;
