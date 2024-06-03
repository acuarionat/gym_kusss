import './CabezaRutinas.css'
import ImagenUsuario from './imagenes/ImagenUsuario.png'
import FlechaIzquierda from './imagenes/FlechaIzquierda.png'

function CabezaRutinas() {
    return (
        <div className='headRutinas'>
            <img className='icoDetalle' src={FlechaIzquierda} alt="Flecha Atras" />
            <p className='tituloRutinas'>RUTINA</p>
            <img className='icoRutinas' src={ImagenUsuario} alt="Perfil" />
        </div>
    )
}

export default CabezaRutinas