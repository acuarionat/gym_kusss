import React from 'react'
import Mapa from './Mapa/Mapa'
import FormulacionInfo from './FormulacionInfo/FormulacionInfo'
import CabezaContactanos from './CabeceraContactanos/CabezaContactanos'
import './VistaContactanos.css';
import BarraGris from '../nosotros/BarraSideBar/BarraGris';
const VistaContactanos = () => {
  return (
    <div>
        <BarraGris/>
        <div className='contacto'>
        <CabezaContactanos/>
        </div>
        <div className='vista-contactanos'>
        <div className='contacto'>
        <Mapa/>
        </div>
        <FormulacionInfo/>
        </div>
    </div>
  )
}

export default VistaContactanos