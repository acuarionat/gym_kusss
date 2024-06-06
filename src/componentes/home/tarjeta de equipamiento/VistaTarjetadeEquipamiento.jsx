import React from 'react';
import CarouselContainerE from './CarouselContainerE';
import CardE from './CardE';
import './VistaTarjetadeEquipamiento.css';

const VistaTarjetadeEquipamiento = () => (
    <div className="tarjetas-container">
        <CarouselContainerE>
            <CardE iconSrc={"../public/imagenes/CintaCorrer.png"} iconAlt="Cinta de correr" title="Cardio" subTitle="Cinta de correr" />
            <CardE iconSrc={".../public/imagenes/BicicletaE.png"} iconAlt="Bicicleta estática" title="Cardio" subTitle="Bicicleta estática" />
            <CardE iconSrc={".../public/imagenes/MaquinaE.png"} iconAlt="Máquina elíptica" title="Cardio" subTitle="Máquina elíptica" />
            <CardE iconSrc={".../public/imagenes/BancoP.png"} iconAlt="Banco de pesas" title="Fuerza" subTitle="Banco de pesas" />
            <CardE iconSrc={".../public/imagenes/MaquinaP.png"} iconAlt="Máquina de polea" title="Fuerza" subTitle="Máquina de polea" />
            <CardE iconSrc={".../public/imagenes/Mancuerda.png"} iconAlt="Mancuerda" title="Fuerza" subTitle="Mancuerda" />
        </CarouselContainerE>
    </div>
);

export default VistaTarjetadeEquipamiento;

