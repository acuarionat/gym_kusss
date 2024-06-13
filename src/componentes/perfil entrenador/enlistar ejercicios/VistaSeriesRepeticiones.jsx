import './VistaSeriesRepeticiones.css'
import CabezaSeriesRepeticiones from './CabezaSeriesRepeticiones'
import NavBarPerfilEntrenador from '../../general/NavBarPerfilEntrenador'
import FormularioRepeticiones from './FormularioRepeticiones'

function SeriesRepeticiones() {
    return (
        <div className='principalSeriesRep'>
            <CabezaSeriesRepeticiones />
            <FormularioRepeticiones />
            <NavBarPerfilEntrenador />
        </div>
    )
}

export default SeriesRepeticiones