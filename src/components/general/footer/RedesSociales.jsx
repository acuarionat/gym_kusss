import React from 'react';
import "./RedesSociales.css";
// import Facebook from '.../public/images/facebook1.png';
// import WhatsApp from '.../public/images/whatsapp1.png';
// import Instagram from '.../public/images/instagram1.png';
// import XTwitter from '.../public/images/twitter1.png';

const RedesSociales = () => {
  return (
    <div className='contenedor'>
      <div className='red-social'>
        <h3 className="parrafo">Redes Sociales</h3>
        <h3 className="parrafo red-social-text">Servicios</h3>
      </div>

      <div className="red-social">
        <div className="red-social-item">
          <img src="/images/facebook1.png" alt="Facebook Logo" />
          <h3 className="parrafo">Facebook</h3>
        </div>
        <h3 className="parrafo red-social-text">Inicio</h3>
      </div>

      <div className="red-social">
        <div className="red-social-item">
          <img src="/images/whatsapp1.png" alt="WhatsApp Logo" />
          <h3 className="parrafo">WhatsApp</h3>
        </div>
        <h4 className="parrafo red-social-text">Sobre nosotros</h4>
      </div>

      <div className="red-social">
        <div className="red-social-item">
          <img src="/images/instagram1.png" alt="Instagram Logo" />
          <h3 className="parrafo">Instagram</h3>
        </div>
        <h3 className="parrafo red-social-text">Contáctanos</h3>
      </div>

      <div className="red-social">
        <div className="red-social-item">
          <img src="/images/twitter1.png" alt="Twitter Logo" />
          <h3 className="parrafo">X-Twitter</h3>
        </div>
        <h3 className="parrafo red-social-text"></h3>
      </div>

      <div className="red-social">
        <div className="red-social-item">
          <h3 className="parrafo"></h3>
        </div>
      </div>
      
      <br />
    </div>
  );
}

export default RedesSociales;
