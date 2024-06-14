import React, {useState} from 'react'
import EjerciciosFApp from '../../../EjerciciosFApp';
import EjerciciosFlApp from '../../../EjerciciosFlApp';
import EjerciciosRApp from '../../../EjerciciosRApp';
import './ComboBoxTipoEjer.css'
const ComboBoxTipoEjer = () => {
    const [selectedOption, setSelectedOption] = useState('');

    const renderOption = () => {
      switch (selectedOption) {
        case 'ejerciciosF':
          return <EjerciciosFApp />;
        case 'ejerciciosFl':
          return <EjerciciosFlApp />;
        case 'ejerciciosR':
          return <EjerciciosRApp />;
        default:
          return null;
      }
    };
  
    return (
      <div className='combo-box'>
        <h2>Selecciona el tipo de ejercicio</h2>
        <select value={selectedOption} onChange={(e) => setSelectedOption(e.target.value)}>
          <option value="">Tipo de Ejercicios</option>
          <option value="ejerciciosF">Ejercicios de Fuerza</option>
          <option value="ejerciciosFl">Ejercicios de Flexibilidad</option>
          <option value="ejerciciosR">Ejercicios de Resistencia</option>
        </select>
        <div className="opciones">
          {renderOption()}
        </div>
      </div>
    );
  };
export default ComboBoxTipoEjer