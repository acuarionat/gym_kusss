import './CabezaZumba.css'
import { useNavigate } from 'react-router-dom';
function CabezaZumba() {
    const navigate = useNavigate();
    return (
        <div className='headDetalle'>
            <img className='icoDetalle' onClick={() => navigate('/')} src={"https://ibb.co/rmg1SV1"} alt="Flecha Atras" />
            <p className='tituloDetalles'>ZUMBA</p>
        </div>
    )
}

export default CabezaZumba