import React from 'react'
import './NavBarPerfil.css'

const NavBarPerfil = () => {
  return (
    <div className='navbar'>
        <button><img src={"/imagenes/home_blanco.png"} alt="home" /></button>
        <button><img src={"/imagenes/pesa_blanco.png"} alt="pesa" /></button> 
        <button><img src={"/imagenes/grafica_blanco.png"} alt="gradica" /></button>
    </div>
  )
}

export default NavBarPerfil