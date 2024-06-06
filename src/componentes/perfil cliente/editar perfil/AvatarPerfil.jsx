import React from 'react'
import './AvatarPerfil.css'
const AvatarPerfil = () => {
  return (
    <div className='foto-perfil'>
        <img src={"imagenes/foto-perfil-cliente-editar.jpg"} alt="foto_perfil" />
        <div className="editar-perfil">
            <img className='edit' src={"imagenes/editar.png"} alt="editar" />
        </div>
    </div>
  )
}

export default AvatarPerfil