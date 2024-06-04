import React from 'react'
import './PerfilDetalleClienteEntrenador.css'

const PerfilDetalleClienteEntrenador = () => {
  return (
    <div className='tarjeta-detalle'>
      <div className="imagenes">
      <button className='flecha'><img src={"/imagenes/FlechaIzquierda.png"} alt="flecha" /></button>
          <button className='perfil'><img src={"/imagenes/foto-perfil.png"} alt="foto-perfil" /></button>
          <div className='editar'></div>
      </div>
      <div className="detalle">
        <h2>JohnDoe</h2>
        <p>johndoe@gmail.com</p>
      </div>
    </div>
  )
}

export default PerfilDetalleClienteEntrenador