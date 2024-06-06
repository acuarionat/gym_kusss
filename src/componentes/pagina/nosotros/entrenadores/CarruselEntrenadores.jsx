import React, { useEffect, useState, useRef } from 'react';
import './CarruselEntrenadores.css';
import TarjetaEntrenador from './TarjetaEntrenador';
import entrenadoresData from '../../../../datos/CardEntrenador.json';
const CarruselEntrenadores = () => {
  const [coaches, setCoaches] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchCoaches = async () => {
      setCoaches(entrenadoresData);
    };

    fetchCoaches();
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
        {coaches.map((coach, index) => (
          <TarjetaEntrenador
            key={index}
            coach={coach}
            onClick={() => handleCardClick(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default CarruselEntrenadores;
