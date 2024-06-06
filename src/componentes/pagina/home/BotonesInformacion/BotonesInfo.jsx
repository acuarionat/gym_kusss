import React from 'react';
import CarouselContainer from "./CarruselContainerInfo";
import Card from "./CardInfo";
import "./BotonesInfoE.css"

const BotonesInfo = () => (
    <CarouselContainer>
        <Card iconSrc={"/imagenes/PerdidaDePeso.png"} iconAlt="Pérdida de Grasa" title="Pérdida de Grasa" description="Muchas ideas sobre cómo perder grasa están equivocadas. Aprende ahora las claves para lograrlo con menos esfuerzo." />
        <Card iconSrc={"/imagenes/GanarMusculo.png"} iconAlt="Ganar Masa Muscular" title="Como Ganar Masa Muscular" description="Ganar musculo requiere combinar de manera adecuada nutrición y entrenamiento, y aquí te explicamos como hacerlo." />
        <Card iconSrc={"/imagenes/SaludMental.png"} iconAlt="Salud Mental" title="Salud Mental" description="El gimnasio no solo se trata de esculpir un cuerpo fuerte y saludable, sino también de cultivar una mente sana y resiliente." />
    </CarouselContainer>
);

export default BotonesInfo;