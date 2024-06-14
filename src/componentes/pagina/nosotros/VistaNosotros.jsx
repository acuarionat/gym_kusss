import React, { useEffect, useState } from 'react';
import BarraGris from './BarraSideBar/BarraGris';
import CabezaNosotros from './CabeceraNosotros/CabezaNosotros';
import Vision from './Misiones/Vision';
import Mision from './Misiones/Mision';
import CardFooter from '../../general/footer/CardFooter';
import CarruselEntrenadores from './entrenadores/CarruselEntrenadores';
import CarruselSalasZonas from './salas y zonas/CarruselSalasZonas';
import './VistaNosotros.css';

const VistaNosotros = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    console.log('useEffect running');
    const userData = JSON.parse(localStorage.getItem('user'));
    console.log('userData from localStorage:', userData);
    setUser(userData);
  }, []);

  useEffect(() => {
    console.log('Current user state:', user);
  }, [user]);
  return (
    <div className='separacion'>
        <BarraGris />
        <CabezaNosotros />
        <Vision />
      <div className="margin-bottom">
        <Mision />
      </div>
      <p className='parrafoNosotrosSalas'>Salas y Zonas</p>
        <div className='separaciones'>
        <CarruselSalasZonas />  
        </div>
      <p className='parrafoNosotrosEntrenadores'>Entrenadores</p>
      <div className="margin-bottom">
        <CarruselEntrenadores />
      </div>
        <CardFooter />
    </div>
  );
};

export default VistaNosotros;
