import React from 'react';
import "./RedesSociales.css";

const redes = [
  { nombre: 'Facebook', servicio: 'Inicio', img: '/imagenes/facebook1.png' },
  { nombre: 'WhatsApp', servicio: 'Sobre nosotros', img: '/imagenes/whatsapp1.png' },
  { nombre: 'Instagram', servicio: 'Contáctanos', img: '/imagenes/instagram1.png' },
  { nombre: 'X-Twitter', servicio: '', img: '/imagenes/twitter1.png' },
];

const RedesSociales = () => {
  return (
    <div className='contenedor'>
      <div className='red-social'>
        <h3 className="parrafo">Redes Sociales</h3>
        <h3 className="parrafo red-social-text">Servicios</h3>
      </div>
      {redes.map((red, index) => (
        <div className="red-social" key={index}>
          <div className="red-social-item">
            <img src={red.img} alt={`${red.nombre} Logo`} />
            <h3 className="parrafo">{red.nombre}</h3>
          </div>
          {red.servicio && <h3 className="parrafo red-social-text">{red.servicio}</h3>}
        </div>
      ))}
    </div>
  );
}

export default RedesSociales;
