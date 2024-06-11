import './CabezaEquipamiento.css';

function CabezaEquipamiento() {
    return (
        <div className='headDetalle'>
            <button className='icoDetalle'>
                <img 
                    className='imagenFlecha' 
                    src={"/imagenes/FlechaIzquierda.png"} 
                    alt="Flecha Atras" 
                />
            </button>
            <p className='tituloDetalles'>DIVERSAS DISCIPLINAS</p>
        </div>
    );
}

export default CabezaEquipamiento;
