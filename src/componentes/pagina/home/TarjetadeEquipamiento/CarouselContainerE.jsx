import React, { useRef } from 'react';

const CarouselContainerE = ({ children }) => {
    const carouselContainerRef = useRef(null);

    const handleTouchStart = (event) => {
        const container = carouselContainerRef.current;
        if (container) {
            container.dataset.startX = event.touches[0].clientX;
        }
    };

    const handleTouchMove = (event) => {
        const container = carouselContainerRef.current;
        if (container && container.dataset.startX) {
            const startX = parseInt(container.dataset.startX, 10);
            const deltaX = event.touches[0].clientX - startX;
            container.scrollLeft -= deltaX;
        }
    };

    const handleTouchEnd = () => {
        const container = carouselContainerRef.current;
        if (container) {
            container.dataset.startX = null;
        }
    };

    return (
        <div className="carousel-container-e" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
            <div className="carousel-e" ref={carouselContainerRef}>
                {children}
            </div>
        </div>
    );
};

export default CarouselContainerE;
