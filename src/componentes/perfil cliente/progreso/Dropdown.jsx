import React, { useState } from 'react';
import './Dropdown.css';
import DropdownMenu from './DropdownMenu';

const Dropdown = () => {
  const [isProgresoOpen, setIsProgresoOpen] = useState(false);
  const [isPesoOpen, setIsPesoOpen] = useState(false);
  const [selectedProgreso, setSelectedProgreso] = useState('');

  const progresoItems = ['Perdida Peso', 'Aumento Musculatura', 'Aumento Resistencia'];

  const pesoItems = {
    'Perdida Peso': ['Altura', 'Peso', 'Porcentaje Grasa Corporal', 'IMC', 'Circunferencia Cintura', 'Circunferencia cadera', 'Circunferencia Brazos', 'Circunferencia Muslos'],
    'Aumento Musculatura': ['Altura', 'Peso', 'Fuerza', 'Circunferencia Brazos', 'Circunferencia Muslos', 'Pecho', 'Espalda', 'Porcentaje Masa Muscular'],
    'Aumento Resistencia': ['Tiempo Correr', 'Distancia Correr', 'Frecuencia Cardiaca Recuperación']
  };

  const handleProgresoSelect = (item) => {
    setSelectedProgreso(item);
  };

  const toggleProgresoDropdown = () => {
    setIsProgresoOpen(!isProgresoOpen);
  };

  const togglePesoDropdown = () => {
    setIsPesoOpen(!isPesoOpen);
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
          isOpen={isPesoOpen}
          toggleDropdown={togglePesoDropdown}
          items={pesoItems[selectedProgreso] || []}
        />
      )}
    </div>
  );
};

export default Dropdown;
