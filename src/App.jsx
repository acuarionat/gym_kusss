import { useState } from 'react'
import './App.css'
import Card from './components/Footer/Card'
import CardEntrada from './components/Buzon/CardEntrada'
import Entrada from './components/Buzon/Entrada'
import CardLogin from './components/Login/CardLogin'
import CardNovedades from './components/Novedades/CardNovedades'

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
