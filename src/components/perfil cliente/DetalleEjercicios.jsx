import './DetalleEjercicios.css'
import CabezaDetallesEjercicio from './CabezaDetallesEjercicio'
import TarjetaConsejoExperto from './TarjetaConsejoExperto'
import TarjetaDetalleEjercicio from './TarjetaDetalleEjercicio'
import NavBarPerfil from '../general/NavBarPerfil'

function Detalle_Ejercicios() {
    return (
        <div className='principalDetalle'>
            <CabezaDetallesEjercicio />
            <TarjetaConsejoExperto />
            <TarjetaDetalleEjercicio />
            <NavBarPerfil />
        </div>
    )
}

export default Detalle_Ejercicios