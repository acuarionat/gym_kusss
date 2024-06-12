import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BotonesVideo.css';

const BotonesInformate = () => {
    const navigate = useNavigate();

    return (
        <div className="containerBotonesVideos">
            <button className='BYoga1' onClick={() => navigate('/videos')}>YOGA</button>
            <button className='BZumba2' onClick={() => navigate('/videos')}>ZUMBA</button>
        </div>
    );
};

export default BotonesInformate;
