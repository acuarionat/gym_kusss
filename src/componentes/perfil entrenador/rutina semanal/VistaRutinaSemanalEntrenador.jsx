import './VistaRutinaSemanalEntrenador.css'
import CabezaRutinaEntrenador from './CabezaRutinasEntrenador'
import NavBarPerfilEntrenador from '../../general/NavBarPerfilEntrenador'
import SemanalEjerciciosEntrenador from './SemanalEjerciciosEntrenador'

function RutinaSemanalEntrenador() {
    return (
        <div className='principalRutinaEntrenador'>
            <CabezaRutinaEntrenador />
            <SemanalEjerciciosEntrenador />
            <div className='clientePaEntrenador'>
                <p className='textoClienteEntre'>Cliente: John Doe</p>
            </div>
            <button className='botonRutinaEntre'>
                <p className='textoBotonEditarRutina'>EDITAR RUTINA</p>
            </button>
            <NavBarPerfilEntrenador />
        </div>
    )
}

export default RutinaSemanalEntrenador