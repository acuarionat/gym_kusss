import './VistaRutinas.css'
import NavBarPerfil from '../../general/NavBarPerfil'
import CabezaRutinas from './CabezaRutinas'
import SemanalEjerciciosCliente from './SemanalEjerciciosCliente'

function Rutinas() {
    return (
        <div className='principalRutinas'>
            <CabezaRutinas />
            <SemanalEjerciciosCliente />
            <NavBarPerfil />
        </div>
    )
}

export default Rutinas