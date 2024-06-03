import './CabezaRutinasEntrenador.css'
import FlechaIzquierda from './imagenes/FlechaIzquierda.png'

function CabezaRutinas() {
    return (
        <div className='headRutinas'>
            <img className='icoDetalle' src={FlechaIzquierda} alt="Flecha Atras" />
            <p className='tituloRutinas'>RUTINA</p>
            <div className='icoRutinas' />
        </div>
    )
}

export default CabezaRutinas