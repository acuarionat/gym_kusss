import React from 'react';
import CarouselContainerE from './CarouselContainerE';
import CardE from './CardE';
import './VistaTarjetadeEquipamiento.css';

const TarjetadeEquipamiento = () => (
    <div className="tarjetas-container">
        <CarouselContainerE>
            <CardE iconSrc={"/imagenes/CintaCorrer.png"} iconAlt="Cinta de correr" title="Cardio" subTitle="Cinta de correr" />
            <CardE iconSrc={"/imagenes/BicicletaE.png"} iconAlt="Bicicleta estática" title="Cardio" subTitle="Bicicleta estática" />
            <CardE iconSrc={"/imagenes/MaquinaE.png"} iconAlt="Máquina elíptica" title="Cardio" subTitle="Máquina elíptica" />
            <CardE iconSrc={"/imagenes/BancoP.png"} iconAlt="Banco de pesas" title="Fuerza" subTitle="Banco de pesas" />
            <CardE iconSrc={"/imagenes/MaquinaP.png"} iconAlt="Máquina de polea" title="Fuerza" subTitle="Máquina de polea" />
            <CardE iconSrc={"/imagenes/Mancuerda.png"} iconAlt="Mancuerda" title="Fuerza" subTitle="Mancuerda" />
        </CarouselContainerE>
    </div>
);

export default TarjetadeEquipamiento;

