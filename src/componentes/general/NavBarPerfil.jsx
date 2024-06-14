import React from "react";
import "./NavBarPerfil.css";
import { NavLink } from "react-router-dom";

const NavBarPerfil = () => {
  return (
    <div className="navbar">
      <NavLink to={`/perfil_cliente`}>
        <button>
          <img src={"/imagenes/home_blanco.png"} alt="home" />
        </button>
      </NavLink>
      <NavLink  to={`/rutina`}>
        <button>
          <img src={"/imagenes/pesa_blanco.png"} alt="pesa" />
        </button>
      </NavLink>
      <NavLink to={`/progreso`}>
        <button>
          <img src={"/imagenes/grafica_blanco.png"} alt="grafica" />
        </button>
      </NavLink>
    </div>
  );
};

export default NavBarPerfil;
