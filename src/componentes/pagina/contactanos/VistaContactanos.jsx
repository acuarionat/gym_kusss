import React from 'react'
import Mapa from './Mapa/Mapa'
import FormulacionInfo from './FormulacionInfo/FormulacionInfo'
import CabezaContactanos from './CabeceraContactanos/CabezaContactanos'
import './VistaContactanos.css';
const VistaContactanos = () => {
  return (
    <div>
        <CabezaContactanos/>
        <Mapa/>
        <FormulacionInfo/>
    </div>
  )
}

export default VistaContactanos