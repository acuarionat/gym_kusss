import React from 'react';
import { useNavigate } from 'react-router-dom';
import './OrgDiaEjercicio.css';

function OrgDiaEjercicio({ rutina }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/ejercicios', { state: { ejercicios: rutina.ejercicios } });
    };

    return (
        <div className='dias'>
            <div className='nombreDia'>
                <p className='textoSemanal'>{rutina.dia}</p>
            </div>
            <div className='botonesEjercicios'>
                <button className='botonEjer' onClick={handleClick}>{rutina.area}</button>
                <button className='botonCalorias'>Calorias est. {rutina.calorias}</button>
            </div>
        </div>
    );
}

export default OrgDiaEjercicio;
