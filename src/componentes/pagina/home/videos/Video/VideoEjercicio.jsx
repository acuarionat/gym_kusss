import React from 'react'
import './VideoEjercicio.css'
const VideoEjercicio = () => {
  return (
    <div className="video-container">
        <h3 className='parrafoVideo'> Zumba Nemaste</h3>
        <iframe 
            width="560" 
            height="315" 
            src="https://www.youtube.com/embed/6stlCkUDG_s?si=6BI_TC5Lr5EI5PB2" 
            title="YouTube video player" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen>
        </iframe>
    
    </div>
  )
}

export default VideoEjercicio