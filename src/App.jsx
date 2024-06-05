import { useState } from 'react'
import './App.css'
import VistaContactanos from './componentes/pagina/contactanos/VistaContactanos'
import VistaVideos from './componentes/pagina/home/videos/VistaVideos'
import VistaNosotros from './componentes/pagina/nosotros/VistaNosotros'
import SideBar from './componentes/general/SideBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <VistaContactanos/>
    <VistaNosotros/>
    <VistaVideos/>
    <SideBar/>
    </>
  )
}

export default App
