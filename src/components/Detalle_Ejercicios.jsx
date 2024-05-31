import './Detalle_Ejercicios.css'
import FlechaIzquierda from '../assets/FlechaIzquierda.png'
import ImagenUsuario from '../assets/ImagenUsuario.png'
import Corriendo from '../assets/Corriendo.png'
import Foquito from '../assets/Foquito.png'
import Explicacion from '../assets/VideoExplicacion.png'

function Detalle_Ejercicios() {
    return (
        <div className='principalDetalle'>
            <div className='headDetalle'>
                <img className='icoDetalle' src={FlechaIzquierda} alt="Flecha Atras" />
                <p className='tituloDetalles'>FLEXIONES</p>
                <img className='icoDetalle' src={ImagenUsuario} alt="Perfil" />
            </div>
            <div className='detallesEjercicios'>
                <div className='tarjeta'>
                    <div className='tituloTarjeta'>
                        <div className='ecoDetalles'>
                            <img className='icoTitulos' src={Foquito} alt="Imagen Consejo" />
                        </div>
                        <p className='textoTitular'>Consejo Experto</p>
                    </div>
                    <div className='cajaDetalles'>
                        <p className='textoConsejo'>Mantén tus codos cerca de tu cuerpo para maximizar la acrivacion de los tríceps y prevenir la tensión en los hombros.</p>
                    </div>
                </div>
                <div className='tarjeta'>
                    <div className='tituloTarjeta'>
                        <div className='ecoDetalles'>
                            <img className='icoTitulos' src={Corriendo} alt="Imagen Haciendo" />
                        </div>
                        <p className='textoTitular'>Como Hacer</p>
                    </div>
                    <div className='cajaDetalles'>
                        <img className='videoExplica' src={Explicacion} alt="Video Haciendo" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Detalle_Ejercicios