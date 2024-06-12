import './CabezaHorario.css'
import { useNavigate } from 'react-router-dom';
function CabezaHorario() {
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
            <p className='tituloDetalles'>TRANSFORMA TU CUERPO</p>
        </div>
    );
}

export default CabezaHorario