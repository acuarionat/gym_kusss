import React from 'react'
import BarraGris from './BarraSideBar/BarraGris'
import CabezaNosotros from './CabeceraNosotros/CabezaNosotros'
import Vision from './Misiones/Vision'
import Mision from './Misiones/Mision'
const VistaNosotros = () => {
  return (
    <div >
        <BarraGris/>
        <CabezaNosotros/>
        <Vision/>
        <Mision/>
    </div>
  )
}

export default VistaNosotros