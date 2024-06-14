import './CabezaListaEjercicios.css'
import FlechaIzquierda from '/imagenes/FlechaIzquierda.jpg'
import ImagenUsuario from '/imagenes/ImagenUsuario.png'

function CabezaListaEjercicios() {
    return (
        <div className='headLista'>
            <img className='icoLista' src={FlechaIzquierda} alt="Flecha Atras" />
            <p className='tituloEjercicios'>EJERCICIOS</p>
            <div className='icoLista' />
        </div>
    )
}

export default CabezaListaEjercicios
