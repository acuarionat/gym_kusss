import React from 'react';
import './DropdownMenu.css'
const DropdownMenu = ({ title, isOpen, toggleDropdown, items }) => {
  return (
    <div className="dropdown">
      <div className="dropdown-header" onClick={toggleDropdown}>
        {title}
        <span className={`dropdown-arrow ${isOpen ? 'open' : ''}`}>▼</span>
      </div>
      {isOpen && (
        <div className="dropdown-menu">
          {items.map((item, index) => (
            <div className="dropdown-item" key={index}>{item}</div>
          ))}
        </div>
      )}
    </div>
  );
};

export default DropdownMenu;