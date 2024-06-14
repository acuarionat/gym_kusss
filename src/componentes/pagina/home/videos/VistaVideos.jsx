import React, { useEffect, useState } from 'react';
import VideoEjercicio from './Video/VideoEjercicio';
import './VistaVideos.css';
import CabezaZumba from './CabeceraVideos/CabezaZumba';

const VistaVideos = () => {
  const [videosZumba, setVideosZumba] = useState([]);

  useEffect(() => {
    import('../../../../datos/VideosZumba.json')
      .then((module) => {
        setVideosZumba(module.default);
      })
      .catch((error) => {
        console.error('Error fetching zumba videos:', error);
      });
  }, []);

  return (
    <div className='vista-videos'>
      <CabezaZumba />
      <VideoEjercicio videos={videosZumba} />
    </div>
  );
};

export default VistaVideos;