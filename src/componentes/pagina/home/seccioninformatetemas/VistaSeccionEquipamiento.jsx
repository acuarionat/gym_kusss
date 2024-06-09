import React from 'react';
import './VistaSeccionEquipamiento.css'
import CabeceraInformate from './CabeceraInformate'
import MiniTextoInformate from './MiniTextoInformate'
import BotonesInformate from './BotonesInformate'
import VistaBotonesInfo from '../botonesinformacion/VistaBotonesInfo'

const VistaSeccionEquipamiento = () => (
    <div className='VistaSeccEquipamiento'>
        <CabeceraInformate/>
        <BotonesInformate/>
        <MiniTextoInformate/>
        <VistaBotonesInfo/>
    </div>
);

export default VistaSeccionEquipamiento;