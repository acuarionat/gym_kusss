import React from 'react';
import RedesSociales from './RedesSociales';
import Horarios from './Horarios';
import "./CardFooter.css";
import redesData from '../../../datos/RedesSociales.json';
import horariosData from '../../../datos/Horarios.json';
const redes = [
  { nombre: 'Facebook', servicio: 'Inicio', img: '/imagenes/facebook1.png' },
  { nombre: 'WhatsApp', servicio: 'Sobre nosotros', img: '/imagenes/whatsapp1.png' },
  { nombre: 'Instagram', servicio: 'Contáctanos', img: '/imagenes/instagram1.png' },
  { nombre: 'X-Twitter', servicio: '', img: '/imagenes/twitter1.png' },
];

const horarios = [
  { dia: 'Lunes', horas: '9:00 am - 10:00 pm' },
  { dia: 'Martes', horas: '8:00 am - 10:00 pm' },
  { dia: 'Miércoles', horas: '9:00 am - 10:00 pm' },
  { dia: 'Jueves', horas: '9:00 am - 10:00 pm' },
  { dia: 'Viernes', horas: '8:00 am - 12:00 pm' },
];

const CardFooter = () => {
  return (
    <div className="cardfooter">
      <RedesSociales redes={redesData} />
      <Horarios horarios={horariosData} />
    </div>
  );
}

export default CardFooter;