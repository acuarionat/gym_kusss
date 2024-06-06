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
            <select className='cajaElegirDia'>
                <option className='textoElejirDia'>Lunes</option>
                <option className='textoElejirDia'>Martes</option>
                <option className='textoElejirDia'>Miercoles</option>
                <option className='textoElejirDia'>Jueves</option>
                <option className='textoElejirDia'>Viernes</option>
                <option className='textoElejirDia'>Sábado</option>
                <option className='textoElejirDia'>Domingo</option>
            </select>
        </div>
    )
}

export default FormularioEditarRutina