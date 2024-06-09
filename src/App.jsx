import { useState } from 'react'
import './App.css'
import CardRegistro from './componentes/formularios/formulario registrar/CardRegistro'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CardRegistro/>
    </>
  )
}

export default App