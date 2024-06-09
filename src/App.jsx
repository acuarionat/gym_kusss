import { useState } from 'react'
import './App.css'
import CardRegistro from './componentes/formularios/formulario registrar/CardRegistro'
import CardLogin from './componentes/formularios/formulario ingresar/CardLogin'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <CardRegistro/>
    <CardLogin/>
    </>
  )
}

export default App