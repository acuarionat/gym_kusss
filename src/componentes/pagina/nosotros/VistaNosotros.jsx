import React from 'react'
import BarraGris from './BarraSideBar/BarraGris'
import CabezaNosotros from './CabeceraNosotros/CabezaNosotros'
import Vision from './Misiones/Vision'
import Mision from './Misiones/Mision'
import CardFooter from '../../general/footer/CardFooter'
const VistaNosotros = () => {
  return (
    <div >
        <BarraGris/>
        <CabezaNosotros/>
        <Vision/>
        <Mision/>
        <CardFooter/>
    </div>
  )
}

export default VistaNosotros