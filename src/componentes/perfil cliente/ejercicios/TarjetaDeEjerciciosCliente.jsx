import './TarjetaDeEjerciciosCliente.css'

function TarjetaDeEjercicios() {
    return (
        <div className='listaEjer'>
            <div className='barraEjer1'>
                <div className='tipoEjer'>
                    <p className='textoListaEjerTar'>Flexiones</p>
                </div>
                <div className='repeticiones'>
                    <p className='textoListaEjerTar'>3 series x 10 repeticiones</p>
                </div>
            </div>
            <div className='barraEjer2'>
                <div className='tipoEjer'>
                    <p className='textoListaEjerTar'>Curl con Pesos</p>
                </div>
                <div className='repeticiones'>
                    <p className='textoListaEjerTar'>3 series x 10 repeticiones</p>
                </div>
            </div>
            <div className='barraEjer1'>
                <div className='tipoEjer'>
                    <p className='textoListaEjerTar'>Press de Empuje</p>
                </div>
                <div className='repeticiones'>
                    <p className='textoListaEjerTar'>3 series x 10 repeticiones</p>
                </div>
            </div>
            <div className='barraEjer2'>
                <div className='tipoEjer'>
                    <p className='textoListaEjerTar'>Press de Banco</p>
                </div>
                <div className='repeticiones'>
                    <p className='textoListaEjerTar'>3 series x 10 repeticiones</p>
                </div>
            </div>
            <div className='barraEjer1'>
                <div className='tipoEjer'>
                    <p className='textoListaEjerTar'>Curl con Barra</p>
                </div>
                <div className='repeticiones'>
                    <p className='textoListaEjerTar'>3 series x 10 repeticiones</p>
                </div>
            </div>
        </div>
    )
}

export default TarjetaDeEjercicios