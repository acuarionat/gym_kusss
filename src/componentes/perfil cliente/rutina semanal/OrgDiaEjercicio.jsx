import './OrgDiaEjercicio.css'

function OrgDiaEjercicio(props) {
    const dia = props.semana
    console.log(dia)
    return (
        <div className='dias'>
            <div className='nombreDia'>
                <p className='textoSemanal'>{dia.nombre}</p>
            </div>
            <div className='botonesEjercicios'>
                <button className='botonEjer'>Pecho</button>
                <button className='botonEjer'>Brazos</button>
            </div>
        </div>
    )
}

export default OrgDiaEjercicio