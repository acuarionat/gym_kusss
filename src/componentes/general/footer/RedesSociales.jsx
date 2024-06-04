import React from 'react';
import "./RedesSociales.css";

const RedesSociales = () => {
  return (
    <div className='contenedor'>
      <div className='red-social'>
        <h3 className="parrafo">Redes Sociales</h3>
        <h3 className="parrafo red-social-text">Servicios</h3>
      </div>

      <div className="red-social">
        <div className="red-social-item">
          <img src="/imagenes/facebook1.png" alt="Facebook Logo" />
          <h3 className="parrafo">Facebook</h3>
        </div>
        <h3 className="parrafo red-social-text">Inicio</h3>
      </div>

      <div className="red-social">
        <div className="red-social-item">
          <img src="/imagenes/whatsapp1.png" alt="WhatsApp Logo" />
          <h3 className="parrafo">WhatsApp</h3>
        </div>
        <h5 className="parrafo red-social-text">Sobre nosotros</h5>
      </div>

      <div className="red-social">
        <div className="red-social-item">
          <img src="/imagenes/instagram1.png" alt="Instagram Logo" />
          <h3 className="parrafo">Instagram</h3>
        </div>
        <h4 className="parrafo red-social-text">Contáctanos</h4>
      </div>

      <div className="red-social">
        <div className="red-social-item">
          <img src="/imagenes/twitter1.png" alt="Twitter Logo" />
          <h3 className="parrafo">X-Twitter</h3>
        </div>

      </div>

      <div className="red-social">
        <div className="red-social-item">
        </div>
      </div>
      
      <br />
    </div>
  );
}

export default RedesSociales;
