import React from 'react'
import { useNavigate } from 'react-router-dom';
import './TarjetaDisciplinas.css'
import TextoDisciplina from './TextoDisciplina'

const TarjetaDisciplinas = () => {
    const navigate = useNavigate();
    return (
        <>
            <button className='TarDis1' onClick={() => navigate('/horario')}>
                <TextoDisciplina/>
            </button>
        </>
    );
  };
  
  export default TarjetaDisciplinas;




