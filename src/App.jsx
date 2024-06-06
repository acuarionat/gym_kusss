import './App.css'
import SideBar from './componentes/general/Slide Bar/SideBar';
import ListaEjercicios from './componentes/perfil cliente/ejercicios/VistaListaEjercicios';
import VistaDetalleEjercicios from './componentes/perfil cliente/detalles de ejercicios/VistaDetalleEjercicios';
import VistaRutinas from './componentes/perfil cliente/rutina semanal/VistaRutinas';
import RutinaSemanalEntrenador from './componentes/perfil entrenador/rutina semanal/VistaRutinaSemanalEntrenador';
import EditarRutinaEntrenador from './componentes/perfil entrenador/editar rutina/VistaEditarRutinaEntrenador';
import SeriesRepeticiones from './componentes/perfil entrenador/enlistar ejercicios/VistaSeriesRepeticiones';

function App() {

  return (
    <>
      <SideBar />
    </>
  )
};

export default App;
