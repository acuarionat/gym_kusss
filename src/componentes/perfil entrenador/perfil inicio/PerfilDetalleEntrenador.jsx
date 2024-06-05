import React from 'react'
import './PerfilDetalleEntrenador.css'

const PerfilDetalleEntrenador = () => {
  return (
    <div className='tarjeta-detalle'>
      <div className="imagenes">
          <div className='editar'></div>
          <button className='perfil'><img src={"/imagenes/foto-perfil.png"} alt="foto-perfil" /></button>
          <button className='cerrar'><img src={"/imagenes/cerrar.png"} alt="cerrar" /></button>
      </div>
      <div className="detalle">
        <h2>Carlos_Olivero</h2>
        <p>carlos_olivero@gmail.com</p>
      </div>
    </div>
  )
}

export default PerfilDetalleEntrenador