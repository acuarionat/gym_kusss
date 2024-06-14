import React, { useEffect, useState, useRef } from 'react';
import './CarruselSalasZonas.css';
import TarjetaSalasZonas from './TarjetaSalasZonas';
import imagenesData from '../../../../datos/Salas.json';
const CarruselSalasZonas = () => {
  const [imagenes, setImagenes] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchImagenes = async () => {
      setImagenes(imagenesData);
    };

    fetchImagenes();
  }, []);

  const handleMouseMove = (e) => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const maxScrollLeft = carousel.scrollWidth - carousel.clientWidth;
      const mouseX = e.clientX - carousel.getBoundingClientRect().left;
      const scrollX = (mouseX / carousel.clientWidth) * maxScrollLeft;
      carousel.scrollTo({ left: scrollX, behavior: 'smooth' });
    }
  };

  const handleCardClick = (index) => {
    if (carouselRef.current) {
      const carousel = carouselRef.current;
      const cardWidth = carousel.children[index].clientWidth;
      const scrollX = index * cardWidth;
      carousel.scrollTo({ left: scrollX, behavior: 'smooth' });
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-card" ref={carouselRef} onMouseMove={handleMouseMove}>
        {imagenes.map((imagen, index) => (
          <TarjetaSalasZonas
            key={imagen.id}
            imagen={imagen}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarruselSalasZonas;
