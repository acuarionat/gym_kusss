import React, { useEffect, useState, useRef } from 'react';
import './CarruselEntrenadores.css';
import Coach from './TarjetaEntrenador';
import coach1 from '/imagenes/coach1.jpg';
import coach2 from '/imagenes/coach2.jpg';
import coach3 from '/imagenes/coach3.jpg';

const CarruselEntrenadores = () => {
  const [coaches, setCoaches] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    // Simulación de llamada a una API
    const fetchCoaches = async () => {
      const data = [
        { name: 'Constanza Cisterna', title: 'Coach', image: coach1 },
        { name: 'John Doe', title: 'Coach', image: coach2 },
        { name: 'Jane Smith', title: 'Coach', image: coach3 },
      ];
      setCoaches(data);
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
      const cardWidth = carousel.clientWidth;
      const scrollX = index * cardWidth;
      carousel.scrollTo({ left: scrollX, behavior: 'smooth' });
    }
  };

  return (
    <div className="carousel-container">
      <div className="carousel-card" ref={carouselRef} onMouseMove={handleMouseMove}>
        {coaches.map((coach, index) => (
          <Coach
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
