import React from 'react';
import CardM from './CardM';
import IconM from './IconM';
import Info from './Info';
import './Mapa.css';

const Mapa = () => (
    <CardM>
        <IconM
            src={"/imagenes/UbicacionGym.png"}
            alt="Vista previa del mapa con marca"
            onClick={() => window.open('https://www.google.com/maps?q=-16.5050517,-68.1312041')}
        />
        <Info
            locationIcon={"imagenes/IconUbic.png"}
            phoneIcon={"imagenes/IconTelef.png"}
            locationText="Corneta Mamani 1934, La Paz"
            phoneText="72518463"
        />
    </CardM>
);

export default Mapa;