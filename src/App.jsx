import { useState } from 'react'
import './App.css'
import VistaGeneralHome from './componentes/pagina/home/VistaGeneralHome'
import PruebaSideBar from './componentes/general/Slide Bar/PruebaSideBar'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    {/* <VistaGeneralHome/> */}
    <PruebaSideBar/>

    </>
  )
}

export default App