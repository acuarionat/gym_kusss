import "./NavBarPerfilEntrenador.css";
import homeBlanco from './imagenes/home_blanco.png'

const NavBarPerfilEntrenador = () => {
  return (
    <div className="navbar-entrenador">
      <button>
        <img src={homeBlanco} alt="home" />
      </button>
    </div>
  );
};

export default NavBarPerfilEntrenador;
