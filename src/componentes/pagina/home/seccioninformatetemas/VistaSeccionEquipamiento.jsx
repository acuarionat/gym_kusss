import React from 'react';
import './VistaSeccionEquipamiento.css'
import CabeceraInformate from './CabeceraInformate'
import MiniTextoInformate from './MiniTextoInformate'
import BotonesInformate from './BotonesInformate'
import VistaBotonesInfo from '/home/carvajalmax/2d0Parcial/2doParcial/2doParcial/2doParcial/src/componentes/pagina/home/botonesinformacion/VistaBotonesInfo'

const VistaSeccionEquipamiento = () => (
    <div className='VistaSeccEquipamiento'>
        <CabeceraInformate/>
        <BotonesInformate/>
        <MiniTextoInformate/>
        <VistaBotonesInfo/>
    </div>
);

export default VistaSeccionEquipamiento;