import React, { useState } from 'react';
import './Dropdown.css';
import DropdownMenu from './DropdownMenu';

const Dropdown = ({ onProgresoSelect, onOptionSelect }) => {
  const [isProgresoOpen, setIsProgresoOpen] = useState(false);
  const [isOptionOpen, setIsOptionOpen] = useState(false);
  const [selectedProgreso, setSelectedProgreso] = useState('');

  const progresoItems = ['Perdida Peso', 'Aumento Musculatura', 'Aumento Resistencia'];

  const pesoItems = {
    'Perdida Peso': ['Altura', 'Peso', 'Porcentaje Grasa Corporal', 'IMC', 'Circunferencia Cintura', 'Circunferencia cadera', 'Circunferencia Brazos', 'Circunferencia Muslos'],
    'Aumento Musculatura': ['Altura', 'Peso', 'Fuerza', 'Circunferencia Brazos', 'Circunferencia Muslos', 'Pecho', 'Espalda', 'Porcentaje Masa Muscular'],
    'Aumento Resistencia': ['Tiempo Correr', 'Distancia Correr', 'Recuperacion']
  };

  const handleProgresoSelect = (item) => {
    setSelectedProgreso(item);
    onProgresoSelect(item);
    setIsOptionOpen(true);
  };

  const handleOptionSelect = (item) => {
    onOptionSelect(item);
  };

  const toggleProgresoDropdown = () => {
    setIsProgresoOpen(!isProgresoOpen);
  };

  const toggleOptionDropdown = () => {
    setIsOptionOpen(!isOptionOpen);
  };

  return (
    <div className="dropdown-container">
      <DropdownMenu
        title="Progreso"
        isOpen={isProgresoOpen}
        toggleDropdown={toggleProgresoDropdown}
        items={progresoItems}
        onSelect={handleProgresoSelect}
      />
      {selectedProgreso && (
        <DropdownMenu
          title="Opciones"
          isOpen={isOptionOpen}
          toggleDropdown={toggleOptionDropdown}
          items={pesoItems[selectedProgreso] || []}
          onSelect={handleOptionSelect}
        />
      )}
    </div>
  );
};

export default Dropdown;
