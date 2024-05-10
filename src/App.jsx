import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='card'>
        <img src="./image/react2.png" alt="" className='imagen' />
        <div className='boton'>
          <div className='triangulo'></div>
        </div>
        <div className='Textos'>
          {/* <p className='terapia'>Terapia 2</p> */}
        </div>
      </div>
    </>
  )
}

export default App
