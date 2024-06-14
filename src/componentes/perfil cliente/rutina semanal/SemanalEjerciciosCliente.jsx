import React from 'react';
import './SemanalEjerciciosCliente.css';
import OrgDiaEjercicio from './OrgDiaEjercicio';

function SemanalEjerciciosCliente({ rutinas }) {
    return (
        <div className='semanal'>
            {rutinas.map((rutina) => (
                <OrgDiaEjercicio key={rutina.id} rutina={rutina} />
            ))}
        </div>
    );
}

export default SemanalEjerciciosCliente;