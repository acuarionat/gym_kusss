import React, { useEffect, useState, useRef } from 'react';
import './CarruselSalasZonas.css';
import TarjetaSalasZonas from './TarjetaSalasZonas';
import imagen1 from '/imagenes/salazona1.png';
import imagen2 from '/imagenes/salazona2.png';
import imagen3 from '/imagenes/salazona3.png';

const CarruselSalasZonas = () => {
  const [imagenes, setImagenes] = useState([]);
  const carouselRef = useRef(null);

  useEffect(() => {
    const fetchImagenes = async () => {
      const data = [
        { id: 1, title: 'Zona Cycling', image: imagen1 },
        { id: 2, title: 'Sala Funcional', image: imagen2 },
        { id: 3, title: 'Zona Cardio', image: imagen3 },
      ];
      setImagenes(data);
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
      const cardWidth = 300; 
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
