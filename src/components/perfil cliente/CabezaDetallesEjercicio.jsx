import './CabezaDetallesEjercicio.css'
import FlechaIzquierda from './imagenes/FlechaIzquierda.png'
import ImagenUsuario from './imagenes/ImagenUsuario.png'

function CabezaDetallesEjercicio() {
    return (
        <div className='headDetalle'>
            <img className='icoDetalle' src={FlechaIzquierda} alt="Flecha Atras" />
            <p className='tituloDetalles'>FLEXIONES</p>
            <img className='icoDetalle' src={ImagenUsuario} alt="Perfil" />
        </div>
    )
}

export default CabezaDetallesEjercicio