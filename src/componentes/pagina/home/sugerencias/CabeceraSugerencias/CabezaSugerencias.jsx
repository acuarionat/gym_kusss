import './CabezaSugerencias.css'
import { useNavigate } from 'react-router-dom';
function CabezaSugerencias() {
    const navigate = useNavigate();
    return (
        <div className='headDetalle'>
            <button className='icoDetalle'>
                <img 
                    className='imagenFlecha' 
                    src={"https://ibb.co/rmg1SV1"} 
                    alt="Flecha Atras" 
                    onClick={() => navigate('/')}
                />
            </button>
            <p className='tituloDetalles1'>BUZON DE QUEJAS Y/O SUGERENCIA</p>
        </div>
    );
}

export default CabezaSugerencias