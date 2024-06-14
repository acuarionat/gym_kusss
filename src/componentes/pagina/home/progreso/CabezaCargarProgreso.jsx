import "./CabezaCargarProgreso.css";
import FlechaIzquierda from "/imagenes/FlechaIzquierda.png";
import { useNavigate } from "react-router-dom";

function CabezaCargarProgreso() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <div className="headDetalle">
      <button className="goback" onClick={handleGoBack}>
        <img className="icoDetalle" src={FlechaIzquierda} alt="Flecha Atras" />
      </button>
      <p className="tituloDetalles">CARGAR PROGRESO</p>
      <div className="icoDetalle" />
    </div>
  );
}

export default CabezaCargarProgreso;