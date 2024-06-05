import React from 'react'
import CabezaYoga from './CabeceraVideos/CabezaYoga'
import VideoEjercicio from './Video/VideoEjercicio'
import './VistaVideos.css';
import CabezaZumba from './CabeceraVideos/CabezaZumba';

const videos = [
  { id: 1, title: 'Zumba Nemaste', src: "/videosgym/Prueba1.mp4" },
  { id: 2, title: 'Yoga for Beginners', src: "/videosgym/Prueba1.mp4" },
  { id: 3, title: 'Cardio Blast', src: "/videosgym/Prueba1.mp4" }
];
const VistaVideos = () => {
  return (
    <div className='vista-videos'>
        <CabezaYoga/>
        <VideoEjercicio videos={videos}/>
        <CabezaZumba/>
        <VideoEjercicio videos={videos}/>
    </div>
  )
}

export default VistaVideos