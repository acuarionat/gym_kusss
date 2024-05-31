import React from 'react';
import CarouselContainerE from './CarouselContainerE';
import CardE from './CardE';
import './TarjetadeEquipamiento.css';
import CintaCorrer from "../Img/TarjetadeEquipamiento/CintaCorrer.png";
import BicicletaE from "../Img/TarjetadeEquipamiento/BicicletaE.png";
import MaquinaE from "../Img/TarjetadeEquipamiento/MaquinaE.png";
import BanconP from "../Img/TarjetadeEquipamiento/BancoP.png";
import MaquinaP from "../Img/TarjetadeEquipamiento/MaquinaP.png";
import Mancuerda from "../Img/TarjetadeEquipamiento/Mancuerda.png";

const TarjetadeEquipamiento = () => (
    <CarouselContainerE>
        <CardE iconSrc={CintaCorrer} iconAlt="Cinta de correr" title="Cardio" subTitle="Cinta de correr" />
        <CardE iconSrc={BicicletaE} iconAlt="Bicicleta estática" title="Cardio" subTitle="Bicicleta estática" />
        <CardE iconSrc={MaquinaE} iconAlt="Máquina elíptica" title="Cardio" subTitle="Máquina elíptica" />
        <CardE iconSrc={BanconP} iconAlt="Banco de pesas" title="Fuerza" subTitle="Banco de pesas" />
        <CardE iconSrc={MaquinaP} iconAlt="Máquina de polea" title="Fuerza" subTitle="Máquina de polea" />
        <CardE iconSrc={Mancuerda} iconAlt="Mancuerda" title="Fuerza" subTitle="Mancuerda" />
    </CarouselContainerE>
);

export default TarjetadeEquipamiento;
