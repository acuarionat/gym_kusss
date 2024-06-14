import './FormularioEditarRutina.css'
import flechaAbajo from '/imagenes/FlechaAbajo.png'

function FormularioEditarRutina() {
    return (
        <div className='formularioEditar'>
          
                <p className='textoCalorias'>Calorias:</p>
        
            <input type="text" className='ingresoDatos' />
        
                <p className='textoDia'>Día:</p>
          
            <div className='cajaElegirDia'>
                <p className='textoElejirDia'>Martes</p>
                <img className='icoAñadir' src={flechaAbajo} alt="flechita" />
            </div>
        </div>
    )
}

export default FormularioEditarRutina