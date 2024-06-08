import "./CabezaRutinas.css";
import FlechaIzquierda from "/imagenes/FlechaIzquierda.png";
import { useNavigate } from "react-router-dom";

function CabezaRutinas() {
    const navigate = useNavigate();

    const handleGoBack = () => {
      navigate(-1);
    };
  
  return (
    <div className="headRutinas">
      <button className="goback" onClick={handleGoBack}>
        <img className="icoDetalle" src={FlechaIzquierda} alt="Flecha Atras" />
      </button>
      <p className="tituloRutinas">RUTINA</p>
      <div className="icoRutinas" />
    </div>
  );
}

export default CabezaRutinas;
