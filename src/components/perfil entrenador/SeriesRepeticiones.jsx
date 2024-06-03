import './SeriesRepeticiones.css'
import CabezaSeriesRepeticiones from './CabezaSeriesRepeticiones'
import NavBarPerfilEntrenador from '../general/NavBarPerfilEntrenador'
import FormularioRepeticiones from './FormularioRepeticiones'

function SeriesRepeticiones() {
    return (
        <div className='principalSeriesRep'>
            <CabezaSeriesRepeticiones />
            <FormularioRepeticiones />
            <button className='botonEditarEjercicio'>
                <p className='textoConfirmarEjercicio'>CONFIRMAR EJERCICIO</p>
            </button>
            <NavBarPerfilEntrenador />
        </div>
    )
}

export default SeriesRepeticiones