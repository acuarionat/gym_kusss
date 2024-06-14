import React from 'react';
import CardM from './CardM';
import IconM from './IconM';
import Info from './Info';
import './Mapa.css';

const Mapa = () => (
    <CardM>
        <IconM
            src={"https://ibb.co/sCbBcr1"}
            alt="Vista previa del mapa con marca"
            onClick={() => window.open('https://www.google.com/maps?q=-16.5050517,-68.1312041')}
        />
        <Info
            locationIcon={"https://ibb.co/KytQWvJ"}
            phoneIcon={"https://ibb.co/Jjrc4Wd"}
            locationText="Corneta Mamani 1934, La Paz"
            phoneText="72518463"
        />
    </CardM>
);

export default Mapa;