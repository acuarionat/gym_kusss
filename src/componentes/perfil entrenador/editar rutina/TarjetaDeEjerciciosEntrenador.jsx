import './TarjetaDeEjerciciosEntrenador.css'

function TarjetaDeEjercicios() {
    return (
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
                    <p className='textoListaEjer'>Presiona para editar</p>
                </div>
            </div>
            <div className='barraEjer1'>
                <div className='tipoEjer'>
                    <p className='textoListaEjer'>Press de Empuje</p>
                </div>
                <div className='repeticiones'>
                    <p className='textoListaEjer'>Presiona para editar</p>
                </div>
            </div>
        </div>
    )
}

export default TarjetaDeEjercicios