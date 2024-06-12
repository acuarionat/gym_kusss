import './CabezaEquipamiento.css';
import { useNavigate } from 'react-router-dom';
function CabezaEquipamiento() {
    const navigate = useNavigate();
    return (
        <div className='headDetalle'>
            <button className='icoDetalle'>
                <img 
                    className='imagenFlecha' 
                    src={"/imagenes/FlechaIzquierda.png"} 
                    alt="Flecha Atras" 
                    onClick={() => navigate('/')}
                />
            </button>
            <p className='tituloDetalles'>DIVERSAS DISCIPLINAS</p>
        </div>
    );
}

export default CabezaEquipamiento;
