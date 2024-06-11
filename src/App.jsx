import { useState } from 'react'
import './App.css'
import CardRegistro from './componentes/formularios/formulario registrar/CardRegistro'
import CardLogin from './componentes/formularios/formulario ingresar/CardLogin'
import VistaNosotros from './componentes/pagina/nosotros/VistaNosotros'
import VistaHorario from './componentes/pagina/home/horario/VistaHorario'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <CardRegistro/>
    <CardLogin/> */}
    <VistaHorario/>
    </>
  )
}

export default App