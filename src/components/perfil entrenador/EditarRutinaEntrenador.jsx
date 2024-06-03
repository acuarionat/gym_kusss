import './EditarRutinaEntrenador.css'
import CabezaEditarRutina from './CabezaEditarRutina'
import NavBarPerfilEntrenador from '../general/NavBarPerfilEntrenador'
import FormularioEditarRutina from './FormularioEditarRutina'
import TarjetaDeEjerciciosEntrenador from './TarjetaDeEjerciciosEntrenador'
import añadir from './imagenes/Añadir.png'

function EditarRutinaEntrenador() {
    return (
        <div className='principalEditarRutina'>
            <CabezaEditarRutina />
            <FormularioEditarRutina />
            <div className='cajaPaAñadir'>
                <p className='textoPaAñadir'>Agregar Ejercicio</p>
                <img className='icoPaAñadir' src={añadir} alt="Añadir" />
            </div>
            <TarjetaDeEjerciciosEntrenador />
            <button className='botonEditarRutinaEntr'>
                <p className='textoBotonEditarRut'>COMPLETAR EDICIÓN</p>
            </button>
            <NavBarPerfilEntrenador />
        </div>
    )
}

export default EditarRutinaEntrenador