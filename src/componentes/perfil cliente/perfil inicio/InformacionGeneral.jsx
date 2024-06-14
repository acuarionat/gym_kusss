import React from 'react'
import './InformacionGeneral.css'
import PerfilInfo from './PerfilInfo'
import PerfilProgreso from './PerfilProgreso'
const InformacionGeneral = () => {
  return (
    <div className='informacion'>
        <PerfilInfo/>
        <PerfilProgreso/>
    </div>
  )
}

export default InformacionGeneral
