import { useState } from 'react'
import './App.css'
import CardRegistro from './componentes/formularios/formulario registrar/CardRegistro'
import CardLogin from './componentes/formularios/formulario ingresar/CardLogin'
import VistaNosotros from './componentes/pagina/nosotros/VistaNosotros'
import VistaEquipamiento from './componentes/pagina/home/equipamiento/VistaEquipamiento'
import VistaHorario from './componentes/pagina/home/horario/VistaHorario'
import VistaSugerencias from './componentes/pagina/home/sugerencias/VistaSugerencias'
import VistaContactanos from './componentes/pagina/contactanos/VistaContactanos'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <VistaEquipamiento/> */}
    {/* <VistaContactanos/> */}
    <VistaHorario/>
    {/* <VistaSugerencias/> */}
    </>
  )
}

export default App