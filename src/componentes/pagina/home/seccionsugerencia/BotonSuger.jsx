import React from 'react';
import './BotonSuger.css';
import { useNavigate } from 'react-router-dom';

const BotomSuger = () => {
    const navigate = useNavigate();
    return (
        <button className='BSuger' onClick={() => navigate('/sugerencias')}>
            Buzon de Quejas y/o Sugerencias
        </button>
    );
};

export default BotomSuger;
