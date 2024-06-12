import './CabezaYoga.css'
import { useNavigate } from 'react-router-dom';
function CabezaYoga() {
    const navigate = useNavigate();
    return (
        <div className='headDetalle'>
            <img className='icoDetalle' onClick={() => navigate('/')} src={"/imagenes/FlechaIzquierda.png"} alt="Flecha Atras" />
            <p className='tituloDetalles'>YOGA</p>
        </div>
    )
}

export default CabezaYoga