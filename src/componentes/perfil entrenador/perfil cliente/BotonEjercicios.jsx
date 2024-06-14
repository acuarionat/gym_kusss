import React from "react";
import "./Boton.css";
import { NavLink } from "react-router-dom";

const BotonEjercicios = () => {
  return <div >
    <NavLink to='/variedad_ejercicios'>
    <button className="boton">LISTA DE EJERCICIOS</button>
    </NavLink>
  </div>;
};

export default BotonEjercicios;
