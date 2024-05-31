import './App.css';
import BotonesInfo from "./components/BotonesInfo/BotonesInfo";
import Mapa from "./components/Mapa/Mapa";
import TarDeEquipamiento from "./components/TarjetadeEquipamiento/TarjetadeEquipamiento"
import FormulacionInfo from "./components/FormulacionInfo/FormulacionInfo"

function App() {
  return (
    <>
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400&family=Teko:wght@400&display=swap" rel="stylesheet" />

      <div className="container">
        <TarDeEquipamiento />
        <BotonesInfo />
        <Mapa />
        <FormulacionInfo />
      </div>

    </>
  )
}

export default App;
