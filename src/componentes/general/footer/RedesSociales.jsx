import React from 'react';
import "./RedesSociales.css";

const RedesSociales = ({ redes }) => {
  return (
    <div className='contenedor'>
      <div className='red-social'>
        <h3 className="parrafo">Redes Sociales</h3>
        <h3 className="parrafo red-social-text">Servicios</h3>
      </div>
      {redes.map((red, index) => (
        <div className="red-social" key={index}>
          <a href={red.url} className="red-social-item">
            <img src={red.img} alt={`${red.nombre} Logo`} />
            <h3 className="parrafo">{red.nombre}</h3>
          </a>
          {red.servicio && <h3 className="parrafo red-social-text">{red.servicio}</h3>}
        </div>
      ))}
    </div>
  );
}

export default RedesSociales;