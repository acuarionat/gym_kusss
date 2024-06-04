import React from 'react'
import './InformacionGeneralClienteEntrenador.css'
import PerfilInfo from './PerfilProgresoClienteEntrenador'
import PerfilProgreso from './PerfilInfoClienteEntrenador'
const InformacionGeneralClienteEntrenador = () => {
  return (
    <div className='informacion'>
       <PerfilProgreso/>
        <PerfilInfo/>
    </div>
  )
}

export default InformacionGeneralClienteEntrenador
