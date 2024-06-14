import './CabezaSeriesRepeticiones.css'
import { useNavigate } from "react-router-dom";

function CabezaRutinas() {
    const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };
    return (
        <div className='headRutinas'>
             <button className="goback" onClick={handleGoBack}>
        <img
          className="icoDetalle"
          src={"imagenes/FlechaIzquierda.png"}
          alt="Flecha Atras"
        />
      </button>
            <p className='tituloRutinas'>FLEXIONES</p>
            <div className='icoRutinas' />
        </div>
    )
}

export default CabezaRutinas