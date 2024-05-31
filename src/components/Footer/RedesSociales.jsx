import React from 'react'
import "./RedesSociales.css";
import Facebook from '../images/facebook1.png';
import WhatsApp from '../images/whatsapp1.png';
import Instagram from '../images/instagram1.png';
import XTwitter from '../images/twitter1.png';

const RedesSociales = () => {
  return (
    <div className='contenedor'>
      <div className='red-social'>
      <h1 className="poppins-semibold">Redes Sociales </h1>
      <h1 className="poppins-semibold">Servicios</h1>
      </div>
      
      <div className="red-social">
        <img src={Facebook} alt="Facebook Logo" />
        <h2 className="poppins-medium">Facebook</h2>
        <h2 className="poppins-medium">Inicio</h2>
      </div>
      <div className="red-social">
        <img src={WhatsApp} alt="WhatsApp Logo" />
        <h2 className="poppins-medium">WhatsApp</h2>
        <h2 className="poppins-medium">Sobre nosotros</h2>
      </div>
      <div className="red-social">
        <img src={Instagram} alt="Instagram Logo" />
        <h2 className="poppins-medium">Instagram</h2>
        <h2 className="poppins-medium">Blog</h2>
      </div>
      <div className="red-social">
        <img src={XTwitter} alt="Twitter Logo" />
        <h2 className="poppins-medium">X-Twitter</h2>
        <h2 className="poppins-medium">Galeria</h2>
      </div>
      <div className="red-social">
        
        <h2 className="poppins-medium"></h2>
        <h2 className="poppins-medium">Contactanos</h2>
      </div>
      <br />
    </div>
  )
}

export default RedesSociales