import React from 'react';
import CarouselContainerE from './CarouselContainerE';
import CardE from './CardE';
import './VistaTarjetadeEquipamiento.css';

const VistaTarjetadeEquipamiento = () => (
    <div className="tarjetas-container">
        <CarouselContainerE>
            <CardE iconSrc={"https://ibb.co/89XSmNP"} iconAlt="Cinta de correr" title="Cardio" subTitle="Cinta de correr" />
            <CardE iconSrc={"https://ibb.co/VtfDr2v"} iconAlt="Bicicleta estática" title="Cardio" subTitle="Bicicleta estática" />
            <CardE iconSrc={"https://ibb.co/NVsk1Hd"} iconAlt="Banco de pesas" title="Fuerza" subTitle="Banco de pesas" />
            <CardE iconSrc={"https://ibb.co/ZgcS2dn"} iconAlt="Máquina de polea" title="Fuerza" subTitle="Máquina de polea" />
            <CardE iconSrc={"https://ibb.co/7zmMNk5"} iconAlt="Mancuerda" title="Fuerza" subTitle="Mancuerda" />
        </CarouselContainerE>
    </div>
);

export default VistaTarjetadeEquipamiento;

