import './CabezaCargaProgreso.css'
import FlechaIzquierda from '/imagenes/FlechaIzquierda.png'

function CabezaCargarProgreso() {
    return (
        <div className='headDetalle'>
            <img className='icoDetalle' src={FlechaIzquierda} alt="Flecha Atras" />
            <p className='tituloDetalles'>CARGAR PROGRESO</p>
            <div className='icoDetalle' />
        </div>
    )
}

export default CabezaCargarProgreso