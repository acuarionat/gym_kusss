import './TarjetaDetalleEjercicio.css'
import Corriendo from '/imagenes/Corriendo.png'
import Explicacion from '/imagenes/VideoExplicacion.png'

function TarjetaDetalleEjercicio() {
    return (
        <div className='tarjetaDetalle'>
            <div className='tituloTarjetaDetalle'>
                <div className='ecoDetallesComo'>
                    <img className='icoTitulosDetalle' src={Corriendo} alt="Imagen Haciendo" />
                </div>
                <p className='textoTitularDetalle'>Como Hacer</p>
            </div>
            <div className='cajaDetallesComo'>
                <img className='videoExplica' src={Explicacion} alt="Video Haciendo" />
            </div>
        </div>
    )
}

export default TarjetaDetalleEjercicio