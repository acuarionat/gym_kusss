import './FormularioRepeticiones.css'

function FormularioEditarRutina() {
    return (
        <div className='formularioRepesSeries'>
            <div className='cajaTextoSeries'>
                <p className='textoSeries'>Series:</p>
            </div>
            <input type="number" className='ingresoSeries' />
            <div className='cajaTextoRepeticiones'>
                <p className='textoRepeticiones'>Repeticiones:</p>
            </div>
            <input type="number" className='ingresoRepeticiones' />
            <div className='cajaTextoConsejoExperto'>
                <p className='textoConsejoExerto'>Consejo Experto:</p>
            </div>
            <input type="text" className='ingresoConsejoExperto' />
        </div>
    )
}

export default FormularioEditarRutina