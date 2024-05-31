import React from 'react';
import CarouselContainer from './CarouselContainer';
import Card from './Card';
import './BotonesInfo.css';
import PerDPeso from "../Img/BotonesInfo/PerdidaDePeso.png";
import GanarMusculo from "../Img/BotonesInfo/GanarMusculo.png";
import SaludMental from "../Img/BotonesInfo/SaludMental.png";
import Reabilitacion from "../Img/BotonesInfo/Reabilitacion.png";

const BotonesInfo = () => (
    <CarouselContainer>
        <Card iconSrc={PerDPeso} iconAlt="Pérdida de Grasa" title="Pérdida de Grasa" description="Muchas ideas sobre cómo perder grasa están equivocadas. Aprende ahora las claves para lograrlo con menos esfuerzo." />
        <Card iconSrc={GanarMusculo} iconAlt="Ganar Masa Muscular" title="Como Ganar Masa Muscular" description="Ganar musculo requiere combinar de manera adecuada nutrición y entrenamiento, y aquí te explicamos como hacerlo." />
        <Card iconSrc={SaludMental} iconAlt="Salud Mental" title="Salud Mental" description="El gimnasio no solo se trata de esculpir un cuerpo fuerte y saludable, sino también de cultivar una mente sana y resiliente." />
        <Card iconSrc={Reabilitacion} iconAlt="Rehabilitación" title="Rehabilitación" description="El descanso es el tercer gran pilar de tu salud. Si no duermes bien o se desajustan tus ritmos circadianos será difícil lograr buenos resultados." />
    </CarouselContainer>
);

export default BotonesInfo;
