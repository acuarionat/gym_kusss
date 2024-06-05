import React from 'react'
import CabezaYoga from './CabeceraVideos/CabezaYoga'
import VideoEjercicio from './Video/VideoEjercicio'
import './VistaVideos.css';
const VistaVideos = () => {
  return (
    <div className='vista-videos'>
        <CabezaYoga/>
        <VideoEjercicio/>
    </div>
  )
}

export default VistaVideos