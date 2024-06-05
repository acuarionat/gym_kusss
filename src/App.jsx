import { useState } from 'react'
import './App.css'
import VistaTarjetaNotificaciones from './Comnentes/TarjetaDeNotificaciones/VistaTarjetaNotificaciones'
import VistaTarjetaCompartir from './Comnentes/TarjetaCompartir/VistaTarjetaCompartir'
import VistaFormularioDeRegistros from './Comnentes/FormularioDeRegistros/VistaFormularioDeRegistros'
import VistaDeTarjetaDeClienteAsignado from './Comnentes/TarjetaDeClienteAsignado/VistaDeTarjetaDeClienteAsignado'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <VistaTarjetaNotificaciones/> */}
      {/* <VistaTarjetaCompartir/> */}
      {/* <VistaFormularioDeRegistros/> */}
      <VistaDeTarjetaDeClienteAsignado/>
    </>
  )
}

export default App
