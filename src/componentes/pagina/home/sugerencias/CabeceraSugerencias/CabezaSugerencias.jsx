import './CabezaSugerencias.css'
function CabezaSugerencias() {
    return (
        <div className='headDetalle'>
            <button className='icoDetalle'>
                <img 
                    className='imagenFlecha' 
                    src={"/imagenes/FlechaIzquierda.png"} 
                    alt="Flecha Atras" 
                />
            </button>
            <p className='tituloDetalles'>BUZON DE QUEJAS Y/O SUGERENCIA</p>
        </div>
    );
}

export default CabezaSugerencias