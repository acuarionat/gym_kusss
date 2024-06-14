import React, { useEffect, useState } from 'react';
import CabezaYoga from './CabeceraVideos/CabezaYoga';
import VideoEjercicio from './Video/VideoEjercicio';
import './VistaVideos.css';

const VistaYoga = () => {
  const [videosYoga, setVideosYoga] = useState([]);

  useEffect(() => {
    import('../../../../datos/VideosYoga.json')
      .then((module) => {
        setVideosYoga(module.default);
      })
      .catch((error) => {
        console.error('Error fetching yoga videos:', error);
      });
  }, []);

  return (
    <div className='vista-videos'>
      <CabezaYoga />
      <VideoEjercicio videos={videosYoga} />
    </div>
  );
};

export default VistaYoga;