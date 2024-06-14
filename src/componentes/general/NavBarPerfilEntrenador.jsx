import React from "react";
import "./NavBarPerfilEntrenador.css";
import { NavLink } from "react-router-dom";
const NavBarPerfilEntrenador = () => {
  return (
    <div className="navbar-entrenador">
      <NavLink  to={`/perfil_entrenador`}>
      <button>
        <img src={"/imagenes/home_blanco.png"} alt="home" />
      </button>
      </NavLink>
    </div>
  );
};

export default NavBarPerfilEntrenador;
