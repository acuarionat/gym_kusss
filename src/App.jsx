import { useState } from 'react'
import './App.css'
import CardRegistro from './componentes/formularios/formulario registrar/CardRegistro'
import CardLogin from './componentes/formularios/formulario ingresar/CardLogin'
import VistaNosotros from './componentes/pagina/nosotros/VistaNosotros'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CardRegistro/>
    <CardLogin/>
    {/* <VistaNosotros/> */}
    </>
  )
}

export default App