import React from "react";
import "./TarjetaDisciplinas.css";
import TextoDisciplina from "./TextoDisciplina";
import { NavLink } from "react-router-dom";

const TarjetaDisciplinas = () => {
  return (
    <>
      <NavLink to='/horario'>
        <div className="TarDis1">
          <TextoDisciplina />
        </div>
      </NavLink>
    </>
  );
};

export default TarjetaDisciplinas;
