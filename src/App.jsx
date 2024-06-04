import { useState } from 'react'
import './App.css'
import Card from './componentes/general/footer/Card'
import CardEntrada from './componentes/pagina/home/sugerencias/CardEntrada'
import CardLogin from './componentes/formularios/formulario ingresar/CardLogin'
import CardNovedades from './componentes/pagina/home/novedades/CardNovedades'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CardLogin/>
    <CardEntrada/>
    <CardNovedades/>
    <CardNovedades/>
    <CardNovedades/>
    <Card/>
      
      
    </>
  )
}

export default App
