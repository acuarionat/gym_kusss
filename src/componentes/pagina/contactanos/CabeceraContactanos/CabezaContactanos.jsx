import './CabezaContactanos.css'
function CabezaContactanos() {
    return (
        <div className='headDetalle'>
            <button className='icoDetalle'>
                <img 
                    className='imagenFlecha' 
                    src={"/imagenes/FlechaIzquierda.png"} 
                    alt="Flecha Atras" 
                />
            </button>
            <p className='tituloDetalles'>CONTACTANOS</p>
        </div>
    )
}

export default CabezaContactanos