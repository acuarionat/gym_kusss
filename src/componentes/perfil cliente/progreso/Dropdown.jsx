import React, { useState } from 'react';
import './VistaProgreso.css';
import DropdownMenu from './DropdownMenu';

const Dropdown = () => {
  const [isProgresoOpen, setIsProgresoOpen] = useState(false);
  const [isPesoOpen, setIsPesoOpen] = useState(false);
  const progresoItems = ['Perdida Peso', '+ Masa Muscular', 'Resistencia'];
  const pesoItems = ['%Grasa corp.', 'Cintura', 'Cadera'];

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
      />
      <DropdownMenu 
        title="Peso"
        isOpen={isPesoOpen}
        toggleDropdown={togglePesoDropdown}
        items={pesoItems}
      />
    </div>
  );
};

export default Dropdown;
