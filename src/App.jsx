import './App.css'
import SideBar from './components/general/SideBar';
import ListaEjercicios from './components/perfil cliente/ListaEjercicios';
import DetalleEjercicios from './components/perfil cliente/DetalleEjercicios';
import Rutinas from './components/perfil cliente/Rutinas';
import RutinaSemanalEntrenador from './components/perfil entrenador/RutinaSemanalEntrenador';
import EditarRutinaEntrenador from './components/perfil entrenador/EditarRutinaEntrenador';
import SeriesRepeticiones from './components/perfil entrenador/SeriesRepeticiones';

function App() {

  return (
    <>
      <SeriesRepeticiones />
    </>
  )
};

export default App;
