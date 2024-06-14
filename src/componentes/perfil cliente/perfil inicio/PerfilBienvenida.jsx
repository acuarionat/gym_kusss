import React, { useState, useEffect } from 'react';
import './PerfilBienvenida.css';

const PerfilBienvenida = () => {
  const [nombre, setNombre] = useState('');
  

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setNombre(user.name);
    }
  }, []);

  return (
    <div className='bienvenida'>
      <div className="texto">
        <h3>Bienvenido, <span className='rojo'>{nombre}</span></h3>
        <p>Este es tu espacio personalizado, donde podrás encontrar las herramientas necesarias para cumplir tus objetivos.</p>
      </div>
      <div className="imagen"> </div>
    </div>
  );
}

export default PerfilBienvenida;
