import "./VistaListaEjercicios.css";
import CabezaListaEjercicios from "./CabezaListaEjercicios";
import NavBarPerfil from "../../general/NavBarPerfil";
import TarjetaDeEjercicios from "./TarjetaDeEjerciciosCliente";

function Lista_Ejercicios() {
  return (
    <div className="principalLista">
      <div className="superior-lista-ejer">
        <CabezaListaEjercicios />
        <TarjetaDeEjercicios />
      </div>
      <NavBarPerfil />
    </div>
  );
}

export default Lista_Ejercicios;
