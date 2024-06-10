import { usestate } from 'react'
import './App.css'
import VistaGeneralHome from './componentes/pagina/home/VistaGeneralHome';
import VistaFormularioDeRegistros from './componentes/pagina/home/formularioderegistro/VistaFormularioDeRegistros';
import VistaTarjetadeEquipamiento from './componentes/pagina/home/tarjeta de equipamiento/VistaTarjetadeEquipamiento';
import VistaBotonesInfo from './componentes/pagina/home/botonesinformacion/VistaBotonesInfo';
import VistaSeccionEquipamiento from './componentes/pagina/home/seccioninformatetemas/VistaSeccionEquipamiento';
import VistaSeccionMaquinas from './componentes/pagina/home/seccionmaquinas/VistaSeccionMaquinas';
import VistaSeccionNovedades from './componentes/pagina/home/seccionnovedades/VistaSeccionNovedades';
import VistaSeccionPortada from './componentes/pagina/home/seccionportada/VistaSeccionPortada';
import VistaSeccionSugerencia from './componentes/pagina/home/seccionsugerencia/VistaSeccionSugerencia';
import VistaTarjetaCompartir from './componentes/pagina/home/tarjetacompartir/VistaTarjetaCompartir';
import VistaTarjetaNotificaciones from './componentes/pagina/home/tarjetade notificaciones/VistaTarjetaNotificaciones';
import VistaSeccionHorario from './componentes/pagina/home/seccionhorario/VistaSeccionHorario';

function App() 
{
  return (
    <>
        <VistaGeneralHome/>
        {/* <VistaFormularioDeRegistros/> */}
        {/* <VistaTarjetadeEquipamiento/> */}
        {/* <VistaSeccionSugerencia/> Sirve*/}
        {/* <VistaTarjetaCompartir/> */}
        {/* <VistaSeccionEquipamiento/> Botones tal vez*/}
        {/* <VistaSeccionMaquinas/>
        <VistaTarjetaNotificaciones/>
        <VistaSeccionSugerencia/> */}
        {/* <VistaBotonesInfo/> Sirve*/}
        {/* <VistaSeccionHorario/> Hacer a mi estilo */}
    </>
  )
}

export default App