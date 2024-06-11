import './CabezaHorario.css'
function CabezaHorario() {
    return (
        <div className='headDetalle'>
            <button className='icoDetalle'>
                <img 
                    className='imagenFlecha' 
                    src={"/imagenes/FlechaIzquierda.png"} 
                    alt="Flecha Atras" 
                />
            </button>
            <p className='tituloDetalles'>TRANSFORMA TU CUERPO</p>
        </div>
    );
}

export default CabezaHorario