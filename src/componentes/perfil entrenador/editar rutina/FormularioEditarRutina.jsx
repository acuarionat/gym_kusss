import './FormularioEditarRutina.css'
import flechaAbajo from '/imagenes/FlechaAbajo.png'

function FormularioEditarRutina() {
    return (
        <div className='formularioEditar'>
            <div className='cajaTextoCalorias'>
                <p className='textoCalorias'>Calorias:</p>
            </div>
            <input type="text" className='ingresoDatos' />
            <div className='cajaTextoDia'>
                <p className='textoDia'>Día:</p>
            </div>
            <div className='cajaElegirDia'>
                <p className='textoElejirDia'>Martes</p>
                <img className='icoAñadir' src={flechaAbajo} alt="flechita" />
            </div>
        </div>
    )
}

export default FormularioEditarRutina