import "./CabezaListaEjercicios.css";
import FlechaIzquierda from "/imagenes/FlechaIzquierda.png";
import { useNavigate } from "react-router-dom";
function CabezaListaEjercicios() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="headLista">
      <button className="goback" onClick={handleGoBack}>
        <img
          className="icoDetalle"
          src={"imagenes/FlechaIzquierda.png"}
          alt="Flecha Atras"
        />
      </button>
      <p className="tituloEjercicios">EJERCICIOS</p>
    </div>
  );
}

export default CabezaListaEjercicios;
