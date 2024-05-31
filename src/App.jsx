import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='Compartir'>
        <p className='text'>Compartir</p>
        <div className='logo'>
          <img src="./image/logo.png" alt="" className='logoimg' />
          <p className='textlogo'>MiProgreso.gymhusss</p>
          <img src="./image/cadena.png" alt="" className='cadenalogo' />
          <button className='Vinculo'>Copiar Vinculo</button>
        </div>
        <p className='compartirTexto'>Compartir con otros:</p>
        <div className='twitter'>
          <img src="./image/xlogo.jpg" alt="" className='xlogo' />
          <p className='logox'>Twitter</p>
        </div>
        <div className='messenger'>
          <img src="./image/mesenger.png" alt="" className='mesengerlogo' />
          <p className='logox'>Messenger</p>
        </div>
        <div className='facebook'>
          <img src="./image/faceboock.png" alt="" className='facebooklogo' />
          <p className='logox'>Facebook</p>
        </div>
        <div className='recursos'>
          <img src="./image/compartir.png" alt="" className='opcioneslogo' />
          <p className='recursostext'>Opciones de<br></br> Recurso</p>
        </div>
        <div className='wasap'>
          <img src="./image/wasap.jpg" alt="" className='wasaplogo' />
          <p className='recursostext'>WathsApp</p>
        </div>
        <div className='correo'>
          <img src="./image/carta.png" alt="" className='correologo' />
          <p className='recursostext'>Aplicación <br />de Correo</p>
        </div>
        <div className='gmail'>
          <img src="./image/gmail.png" alt="" className='gmaillogo' />
          <p className='recursostext'>Gmail</p>
        </div>
        <div className='cruz'>
          <img src="./image/opciones.png" alt="" className='maslogo' />
          <p className='recursostext'>Mas<br />opciones...</p>
        </div>
      </div>

      <div className='TarjetaNotificacion'>
      <div className='logoNotificacion'>
          <img src="./image/logo.png" alt="" className='logoNotf' />
          <p className='textNotf'>!CLASES DE CALISTEMIA¡ <br />Se agregaron nuevas clases de calistemia, <br />para que puedas aumentar tu resistencia <br />y mas.</p>
          <button className='info'>Mas información</button>
          <button className='tarde'>Más tarde</button>
        </div>
      </div>

      <div className='FormularioRegistro'>
        <img src="./image/gymAtardecer.jpg" alt="" className='fondos1'/>
        <div className='BarraNav'>
          <img src="./image/barras.png" alt="" className='Barras1' />
        </div>
        <p className='RegistroText'>Registrar</p>
        <div className='Campos10'>
          <p>Nombres</p>
          <div className='TextBox2'></div>
          <p>Correo</p>
          <div className='TextBox2'></div>
          <p>Contraseña</p>
          <div className='TextBox2'></div>
          <p>Teléfono</p>
          <div className='TextBox2'></div>
        </div>
        <button className='Aceptar5'> Aceptar</button>
      </div>

      <div className='UsuAsig'>
        <div className='Cabecera7'>
          <p className='AsigText8'>CLIENTES ASIGNADOS</p>
        </div>
        <img src="./image/flecha.png" alt=""  className='Flecha100'/>
        <div className='Buscador13'>
          <p className='Bus20'>Buscar en el sitio</p>
        </div>
          <img src="./image/lupa.png" alt="" className='imglupa'/>
        <div className='TarjetaUs'>
          <div className='PerfilUs11'>Usuario</div>
          <p className='NameUs12'>John Doe</p>
          <p className='EdadUs15'>Edad:30</p>
          <p className='RutinaUs16'>Ejercicio:3 veces a la semana</p>
        </div>
      </div>

    </>
  )
}

export default App
