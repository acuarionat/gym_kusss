import React, { useEffect, useState } from 'react';
import './VistaEquipamiento.css';
import CabezaEquipamiento from './CabeceraEquipamiento/CabezaEquipamiento';
import TarjetadeEquipamiento from './tarjetadeequipamiento/VistaTarjetadeEquipamiento';

const VistaEquipamiento = () => {
  // const [videosYoga, setVideosYoga] = useState([]);
  // const [videosZumba, setVideosZumba] = useState([]);

  // useEffect(() => {
  //   import('../../../../datos/VideosYoga.json')
  //     .then((module) => {
  //       setVideosYoga(module.default);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching yoga videos:', error);
  //     });

  //   import('../../../../datos/VideosZumba.json')
  //     .then((module) => {
  //       setVideosZumba(module.default);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching zumba videos:', error);
  //     });
  // }, []);

  return (
    <div className='vista-equipamiento'>
      <CabezaEquipamiento />
      <p className='parrafo-equipamiento'>Descubre el equipamiento del gimnasio que te llevará al siguiente nivel</p>
      <TarjetadeEquipamiento />
    </div>
  );
};

export default VistaEquipamiento;