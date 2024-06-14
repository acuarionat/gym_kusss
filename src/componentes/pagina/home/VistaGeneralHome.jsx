import React from "react";
import VistaSeccionPortada from "./seccionportada/VistaSeccionPortada";
import VistaSeccionMaquinas from "./seccionmaquinas/VistaSeccionMaquinas";
import VistaSeccionVideos from "./seccionvideos/VistaSeccionVideos"
import VistaSeccionSugerencia from "./seccionsugerencia/VistaSeccionSugerencia";
import VistaSeccionFooter from "../../general/footer/CardFooter"
import VistaSeccionInformacion from "./seccioninformacion/VistaSeccionInformacion";
import './VistaGeneralHome.css';
const VistaGeneralHome = () => (
  <div className="vista-home">
      <VistaSeccionPortada />
      <VistaSeccionMaquinas />
      <VistaSeccionInformacion/>
      <VistaSeccionVideos/>
      <VistaSeccionSugerencia />
      <VistaSeccionFooter/>
  </div>
);
export default VistaGeneralHome;
