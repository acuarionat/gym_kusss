import { useState } from 'react'
import './App.css'
import CardFooter from './componentes/general/footer/CardFooter'
import CardEntrada from './componentes/pagina/home/sugerencias/CardEntrada'
import CardLogin from './componentes/formularios/formulario ingresar/CardLogin'
import CardNovedades from './componentes/pagina/home/novedades/CardNovedades'
import Mapa from './componentes/pagina/contactanos/Mapa/Mapa'
import FormulacionInfo from './componentes/pagina/contactanos/FormulacionInfo/FormulacionInfo'
import VistaContactanos from './componentes/pagina/contactanos/VistaContactanos'
import VistaVideos from './componentes/pagina/home/videos/VistaVideos'
import BarraGris from './componentes/pagina/nosotros/BarraSideBar/BarraGris'
import CabezaContactanos from './componentes/pagina/contactanos/CabeceraContactanos/CabezaContactanos'
import CabezaNosotros from './componentes/pagina/nosotros/CabeceraNosotros/CabezaNosotros'
import Mision from './componentes/pagina/nosotros/Misiones/Mision'
import Vision from './componentes/pagina/nosotros/Misiones/Vision'
import VistaNosotros from './componentes/pagina/nosotros/VistaNosotros'
import SideBar from './componentes/general/SideBar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <CardLogin/>
    <CardEntrada/>
    <CardNovedades/>
    <CardNovedades/>
    <CardNovedades/>
    <CabezaContactanos/>
    <Mapa/>
    <FormulacionInfo/>
    <VistaContactanos/>
    <CardFooter/> */}
    {/* <BarraGris/>
    <CabezaNosotros/> */}
    {/* <Vision/>
    <Mision/> */}
    <VistaNosotros/>
    {/* <SideBar/> */}
    

      
      
    </>
  )
}

export default App
