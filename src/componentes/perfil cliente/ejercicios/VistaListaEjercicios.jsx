import './VistaListaEjercicios.css'
import CabezaListaEjercicios from './CabezaListaEjercicios'
import NavBarPerfil from '../../general/NavBarPerfil'
import TarjetaDeEjercicios from './TarjetaDeEjerciciosCliente'

function Lista_Ejercicios() {
    return (
        <div className='principalLista'>
            <CabezaListaEjercicios />
            <TarjetaDeEjercicios />
            <NavBarPerfil />
        </div>
    )
}

export default Lista_Ejercicios