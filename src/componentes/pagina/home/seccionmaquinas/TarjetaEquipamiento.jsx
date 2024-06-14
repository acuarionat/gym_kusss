import React from "react";
import { NavLink } from "react-router-dom";
import "./TarjetaEquipamiento.css";
import TextoEquipo from "./TextoEquipo";

const TarjetaEquipamiento = () => {
  return (
    <>
      <NavLink to='/equipamiento'>
        <div className="TarEqui1">
          <TextoEquipo />
        </div>
      </NavLink>
    </>
  );
};

export default TarjetaEquipamiento;
