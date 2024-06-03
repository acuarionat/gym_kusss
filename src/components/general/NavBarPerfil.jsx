import React from "react";
import "./NavBarPerfil.css";
import homeBlanco from './imagenes/home_blanco.png'
import pesaBlanco from './imagenes/pesa_blanco.png'
import graficaBlanco from './imagenes/grafica_blanco.png'

const NavBarPerfil = () => {
  return (
    <div className="navbar">
      <button>
        <img src={homeBlanco} alt="home" />
      </button>
      <button>
        <img src={pesaBlanco} alt="pesa" />
      </button>
      <button>
        <img src={graficaBlanco} alt="grafica" />
      </button>
    </div>
  );
};

export default NavBarPerfil;
