import React from 'react'
import './CabeceraVariedadEjercicios.css'
import { useNavigate } from "react-router-dom";

const CabeceraVariedadEjercicios = () => {
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
      </button>            <p className='tituloRutinas'>VARIEDAD DE EJERCICIOS</p>
        </div>
  )
}

export default CabeceraVariedadEjercicios