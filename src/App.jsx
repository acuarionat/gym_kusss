import { useState } from 'react'
import './App.css'
import Card from './components/general/footer/Card'
import CardEntrada from './components/pagina/home/sugerencias/CardEntrada'
import CardLogin from './components/formularios/formulario ingresar/CardLogin'
import CardNovedades from './components/pagina/home/novedades/CardNovedades'

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
