import React from "react";
import VistaSeccionPortada from "./seccionportada/VistaSeccionPortada";
import VistaSeccionMaquinas from "./seccionmaquinas/VistaSeccionMaquinas";
import VistaSeccionEquipamiento from "./seccioninformatetemas/VistaSeccionEquipamiento";
import VistaseccionNovedades from "./seccionnovedades/VistaSeccionNovedades";
import VistaSeccionSugerencia from "./seccionsugerencia/VistaSeccionSugerencia";

const VistaGeneralHome = () => (
  <div className="VistaGeneralHome1">
    <>
      <VistaSeccionPortada />
      <VistaSeccionMaquinas />
      <VistaSeccionEquipamiento />
      <VistaseccionNovedades />
      <VistaSeccionSugerencia />
    </>
  </div>
);
export default VistaGeneralHome;
