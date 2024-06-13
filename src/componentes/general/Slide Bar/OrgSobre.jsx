import React from 'react';
import { Link } from 'react-router-dom';
import './OrgSobre.css';

function OrgSobre(props) {
    const sideDatos = props.nombre;
    return (
        <Link to={sideDatos.link} className='textosIma'>
            <p className='textos'>{sideDatos.SideBar}</p>
            <img className='icoMenu' src={sideDatos.imagen} alt="Nosotros" />
        </Link>
    );
}

export default OrgSobre;
