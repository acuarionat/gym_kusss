import React from "react";
import VistaSeccionPortada from "./seccionportada/VistaSeccionPortada";
import VistaSeccionMaquinas from "./seccionmaquinas/VistaSeccionMaquinas";
import VistaSeccionInformacion from "./seccioninformacion/VistaSeccionInformacion"
import VistaSeccionVideos from "./seccionvideos/VistaSeccionVideos"
import VistaseccionNovedades from "./seccionnovedades/VistaSeccionNovedades";
import VistaSeccionSugerencia from "./seccionsugerencia/VistaSeccionSugerencia";
import VistaSeccionFooter from "../../general/footer/CardFooter"

const VistaGeneralHome = () => (
  <div className="VistaGeneralHome1">
    <>
      <VistaSeccionPortada />
      <VistaSeccionMaquinas />
      <VistaSeccionInformacion />
      <VistaSeccionVideos/>
      <VistaseccionNovedades />
      <VistaSeccionSugerencia /> 
      <VistaSeccionFooter/>
    </>
  </div>
);
export default VistaGeneralHome;