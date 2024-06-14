import "./VistaDetalleEjercicios.css";
import CabezaDetallesEjercicio from "./CabezaDetallesEjercicio";
import TarjetaConsejoExperto from "./TarjetaConsejoExperto";
import TarjetaDetalleEjercicio from "./TarjetaDetalleEjercicio";
import NavBarPerfil from "../../general/NavBarPerfil";

function Detalle_Ejercicios() {
  return (
    <div className="principalDetalle">
      <div className="superior-detalle-ejer">
        <CabezaDetallesEjercicio />
        <TarjetaConsejoExperto />
        <TarjetaDetalleEjercicio />
      </div>
      <NavBarPerfil />
    </div>
  );
}

export default Detalle_Ejercicios;
