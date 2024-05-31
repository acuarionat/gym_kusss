import './Lista_Ejercicios.css'
import FlechaIzquierda from '../assets/FlechaIzquierda.png'
import ImagenUsuario from '../assets/ImagenUsuario.png'

function Lista_Ejercicios() {
    return (
        <div className='principalLista'>
            <div className='headLista'>
                <img className='icoLista' src={FlechaIzquierda} alt="Flecha Atras" />
                <p className='tituloEjercicios'>EJERCICIOS</p>
                <img className='icoLista' src={ImagenUsuario} alt="Perfil" />
            </div>
            <div className='listaEjer'>
                <div className='barraEjer1'>
                    <div className='tipoEjer'>
                        <p className='textoListaEjer'>Flexiones</p>
                    </div>
                    <div className='repeticiones'>
                        <p className='textoListaEjer'>3 series x 10 repeticiones</p>
                    </div>
                </div>
                <div className='barraEjer2'>
                    <div className='tipoEjer'>
                        <p className='textoListaEjer'>Curl con Pesos</p>
                    </div>
                    <div className='repeticiones'>
                        <p className='textoListaEjer'>3 series x 10 repeticiones</p>
                    </div>
                </div>
                <div className='barraEjer1'>
                    <div className='tipoEjer'>
                        <p className='textoListaEjer'>Press de Empuje</p>
                    </div>
                    <div className='repeticiones'>
                        <p className='textoListaEjer'>3 series x 10 repeticiones</p>
                    </div>
                </div>
                <div className='barraEjer2'>
                    <div className='tipoEjer'>
                        <p className='textoListaEjer'>Press de Banco</p>
                    </div>
                    <div className='repeticiones'>
                        <p className='textoListaEjer'>3 series x 10 repeticiones</p>
                    </div>
                </div>
                <div className='barraEjer1'>
                    <div className='tipoEjer'>
                        <p className='textoListaEjer'>Curl con Barra</p>
                    </div>
                    <div className='repeticiones'>
                        <p className='textoListaEjer'>3 series x 10 repeticiones</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lista_Ejercicios