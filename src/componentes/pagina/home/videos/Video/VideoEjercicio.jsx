import React, { useState } from 'react';
import './VideoEjercicio.css';

const VideoEjercicio = ({ videos }) => {
  const [activeVideo, setActiveVideo] = useState(null);

  const handleVideoClick = (id) => {
    setActiveVideo(id);
  };

  return (
    <div className="videos-container">
      {videos.map((video) => (
        <div key={video.id} className="video-item">
          <h3 className='parrafoVideo'>{video.title}</h3>
          <video
            className={`video ${activeVideo === video.id ? 'active' : ''}`}
            src={video.src}
            controls={activeVideo === video.id}
            onClick={() => handleVideoClick(video.id)}
          />
        </div>
      ))}
    </div>
  );
};

export default VideoEjercicio;

