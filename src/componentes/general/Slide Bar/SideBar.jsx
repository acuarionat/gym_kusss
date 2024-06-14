import React from 'react';
import './SideBar.css';
import OrgSobre from './OrgSobre';

import SlideDatos from '../../../datos/DatosSideBar.json';

function SideBar() {
    return (
        <div className='fondoSideBar'>
            <div className='principalSideBar'>
                <div className='primeraParte'>
                    <div className='close'>
                        <label htmlFor='btnMenu' className='CloseButon'>
                            <img src={'imagenes/Close.png'} alt="Equisxd" />
                        </label>
                    </div>
                    <div className='menu'>
                        <p className='textoMenu'>Menu</p>
                        {SlideDatos.map((datos, index) => (
                            <OrgSobre key={index} nombre={datos} />
                        ))}
                    </div>
                </div>
                <div className='logo'>
                    <img className='imgLogo' src='imagenes/KussLogo.png'alt="KussLogo" />
                </div>
            </div>
        </div>
    );
}

export default SideBar;
