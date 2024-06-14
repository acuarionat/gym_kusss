import React, {useState,useEffect} from 'react'

const RutinaApp = () => {

const [rutinas, setRutinas] = useState([]);

  useEffect(() => {
    axios.get('https://6669267d2e964a6dfed3f9ee.mockapi.io/api/v3/rutina')
      .then(response => {
        setRutinas(response.data.slice(0, 7)); 
      })
      .catch(error => {
        console.error("Error al obtener las rutinas", error);
      });
  }, []);

  return (
    <div>
      {rutinas.map((rutina, index) => (
        <SemanalEjercicios key={index} rutina={rutina} />
      ))}
    </div>
  );
}  

export default RutinaApp