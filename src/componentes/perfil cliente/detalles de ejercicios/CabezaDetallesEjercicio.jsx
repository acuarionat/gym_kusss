import "./CabezaDetallesEjercicio.css";
import { useNavigate } from "react-router-dom";
function CabezaDetallesEjercicio() {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="headDetalle">
      <button className="goback" onClick={handleGoBack}>
        <img
          className="icoDetalle"
          src={"imagenes/FlechaIzquierda.png"}
          alt="Flecha Atras"
        />
      </button>{" "}
      <p className="tituloDetalles">FLEXIONES</p>
      <div className="icoDetalle" />
    </div>
  );
}

export default CabezaDetallesEjercicio;
