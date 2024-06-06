import React from 'react';
import './VistaSeccionEquipamiento.css'
import CabeceraInformate from './CabeceraInformate'
import MiniTextoInformate from './MiniTextoInformate'
import BotonesInformate from './BotonesInformate'
import VistaBotonesInfo from '../botonesInformacion/VistaBotonesInfo'

const VistaSeccionEquipamiento = () => (
    <div className='VistaSeccEquipamiento'>
        <CabeceraInformate/>
        <BotonesInfo/>
        <MiniTextoInformate/>
        <VistaBotonesInformate/>
    </div>



);

export default VistaSeccionEquipamiento;