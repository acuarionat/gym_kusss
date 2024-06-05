import React, { useEffect, useState } from 'react';
import './Zone.css';
import ImageSlider from './ImageSlider';
import image31 from './img/image31.png';
import image34 from './img/image34.png';
import image33 from './img/image33.png';

const Zone = () => {
  const [images, setImages] = useState([]);

  useEffect(() => {
    // Simulación de llamada a una API
    const fetchImages = async () => {
      const data = [
        image31,
        image34,
        image33
      ];
      setImages(data);
    };

    fetchImages();
  }, []);

  return (
    <div className="zone">
      <ImageSlider images={images} />
    </div>
  );
};

export default Zone;
