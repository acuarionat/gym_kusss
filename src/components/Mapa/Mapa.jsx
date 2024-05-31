import React from 'react';
import CardM from './CardM';
import IconM from './IconM';
import Info from './Info';
import './Mapa.css';
import mapaGym from '../Img/Mapa/UbicacionGym.png';
import IconTelef from '../Img/Mapa/IconTelef.png';
import IconUbic from '../Img/Mapa/IconUbic.png';

const Mapa = () => (
    <CardM>
        <IconM
            src={mapaGym}
            alt="Vista previa del mapa con marca"
            onClick={() => window.open('https://www.google.com/maps?q=-16.5050517,-68.1312041')}
        />
        <Info
            locationIcon={IconUbic}
            phoneIcon={IconTelef}
            locationText="Corneta Mamani 1934, La Paz"
            phoneText="72518463"
        />
    </CardM>
);

export default Mapa;
