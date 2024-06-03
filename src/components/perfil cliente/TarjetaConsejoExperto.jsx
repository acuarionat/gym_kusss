import './TarjetaConsejoExperto.css'
import Foquito from './imagenes/Foquito.png'

function TarjetaConsejoExperto() {
    return (
        <div className='tarjetaConsejo'>
            <div className='tituloTarjetaConsejo'>
                <div className='ecoDetallesConsejo'>
                    <img className='icoTitulosConsejo' src={Foquito} alt="Imagen Consejo" />
                </div>
                <p className='textoTitularConsejo'>Consejo Experto</p>
            </div>
            <div className='cajaDetallesConsejo'>
                <p className='textoConsejo'>Mantén tus codos cerca de tu cuerpo para maximizar la acrivacion de los tríceps y prevenir la tensión en los hombros.</p>
            </div>
        </div>
    )
}

export default TarjetaConsejoExperto