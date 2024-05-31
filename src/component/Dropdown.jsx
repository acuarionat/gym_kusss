import React, { useEffect, useState } from 'react';
import './Dropdown.css';
import DropdownMenu from './DropdownMenu';

const Dropdown = () => {
  const [isProgresoOpen, setIsProgresoOpen] = useState(false);
  const [isPesoOpen, setIsPesoOpen] = useState(false);
  const [progresoItems, setProgresoItems] = useState([]);
  const [pesoItems, setPesoItems] = useState([]);

  useEffect(() => {
    // Simulación de llamada a una API
    const fetchItems = async () => {
      const progresoData = [
        'Perdida Peso',
        '+ Masa Muscular',
        'Resistencia'
      ];

      const pesoData = [
        '%Grasa corp.',
        'Cintura',
        'Cadera'
      ];

      setProgresoItems(progresoData);
      setPesoItems(pesoData);
    };

    fetchItems();
  }, []);

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
