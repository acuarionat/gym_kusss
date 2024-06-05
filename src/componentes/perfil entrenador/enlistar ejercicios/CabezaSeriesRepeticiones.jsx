import './CabezaSeriesRepeticiones.css'
import FlechaIzquierda from '/imagenes/FlechaIzquierda.png'

function CabezaRutinas() {
    return (
        <div className='headRutinas'>
            <img className='icoDetalle' src={FlechaIzquierda} alt="Flecha Atras" />
            <p className='tituloRutinas'>FLEXIONES</p>
            <div className='icoRutinas' />
        </div>
    )
}

export default CabezaRutinas