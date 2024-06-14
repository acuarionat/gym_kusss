import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BotonesVideo.css';

const BotonesInformate = () => {
    const navigate = useNavigate();

    return (
        <div className="containerBotonesVideos">
            <button className='BYoga1' onClick={() => navigate('/videosyoga')}>YOGA</button>
            <button className='BZumba2' onClick={() => navigate('/videoszumba')}>ZUMBA</button>
        </div>
    );
};

export default BotonesInformate;
