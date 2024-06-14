import React from 'react';
import './LogosCabecera.css';
import SideBar from '../../../general/Slide Bar/SideBar';
import { useNavigate } from 'react-router-dom';
const LogosCabecera = () => {
    const navigate = useNavigate();
    return (
        <div className='LogosContainer'>
            <img src="https://ibb.co/WBVhjTg" alt="Logo Kuss" className='LogoKussCabecera1' onClick={() => navigate('/')}/>
            <input className='icoDetalleGris' type="checkbox" id='btnMenu' />
            <label htmlFor='btnMenu'>
                <img 
                className='BotonMenu' 
                src={"https://ibb.co/zfDnzjZ"} 
                alt="Barras de Navegacion" 
                />
            </label>
            <SideBar />
        </div>
    );
};

export default LogosCabecera;
