import React, { useEffect, useState } from 'react';
import CabezaYoga from './CabeceraVideos/CabezaYoga';
import VideoEjercicio from './Video/VideoEjercicio';
import './VistaVideos.css';
import CabezaZumba from './CabeceraVideos/CabezaZumba';

const VistaVideos = () => {
  const [videosYoga, setVideosYoga] = useState([]);
  const [videosZumba, setVideosZumba] = useState([]);

  useEffect(() => {
    import('../../../../datos/VideosYoga.json')
      .then((module) => {
        setVideosYoga(module.default);
      })
      .catch((error) => {
        console.error('Error fetching yoga videos:', error);
      });

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
      <CabezaYoga />
      <VideoEjercicio videos={videosYoga} />
      <CabezaZumba />
      <VideoEjercicio videos={videosZumba} />
    </div>
  );
};

export default VistaVideos;