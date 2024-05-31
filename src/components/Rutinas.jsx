import './Rutinas.css'
import ImagenUsuario from '../assets/ImagenUsuario.png'

function Rutinas() {
    return (
        <div className='principalRutinas'>
            <div className='headRutinas'>
                <div className='icoRutinas' />
                <p className='tituloRutinas'>RUTINA</p>
                <img className='icoRutinas' src={ImagenUsuario} alt="Perfil" />
            </div>
            <div className='semanal'>
                <div className='dias'>
                    <div className='nombreDia'>
                        <p className='textoSemanal'>Lunes</p>
                    </div>
                    <div className='botonesEjercicios'>
                        <button className='botonEjer'>Pecho</button>
                        <button className='botonEjer'>Brazos</button>
                    </div>
                </div>
                <div className='dias'>
                    <div className='nombreDia'>
                        <p className='textoSemanal'>Martes</p>
                    </div>
                    <div className='botonesEjercicios'>
                        <button className='botonEjer'>Piernas</button>
                    </div>
                </div>
                <div className='dias'>
                    <div className='nombreDia'>
                        <p className='textoSemanal'>Miercoles</p>
                    </div>
                    <div className='botonesEjercicios'></div>
                </div>
                <div className='dias'>
                    <div className='nombreDia'>
                        <p className='textoSemanal'>Jueves</p>
                    </div>
                    <div className='botonesEjercicios'></div>
                </div>
                <div className='dias'>
                    <div className='nombreDia'>
                        <p className='textoSemanal'>Viernes</p>
                    </div>
                    <div className='botonesEjercicios'>
                        <button className='botonEjer'>Espalda</button>
                        <button className='botonEjer'>Abdominales</button>
                        <button className='botonEjer'>Brazos</button>
                    </div>
                </div>
                <div className='dias'>
                    <div className='nombreDia'>
                        <p className='textoSemanal'>Sabado</p>
                    </div>
                    <div className='botonesEjercicios'></div>
                </div>
                <div className='dias'>
                    <div className='nombreDia'>
                        <p className='textoSemanal'>Domingo</p>
                    </div>
                    <div className='botonesEjercicios'></div>
                </div>
            </div>
        </div>
    )
}

export default Rutinas