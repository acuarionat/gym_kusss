import React, { useState, useEffect } from 'react';
import "./CardRegistro.css";
import InformacionRegistro from './InformacionRegistro';

const CardRegistro = () => {
  const [registro, setRegistro] = useState({
    name: '',
    email: '',
    contraseña: '',
    telefono: ''
  });

  useEffect(() => {
    generarContraseña();
  }, []);

  const generarContraseña = async () => {
    const length = 16;
    const apiKey = '6e9neODB7sWqW79jWeri1A==Yvw3YayAjI8AiJTc';
    
    try {
      const response = await fetch(`https://api.api-ninjas.com/v1/passwordgenerator?length=${length}`, {
        method: 'GET',
        headers: {
          'X-Api-Key': apiKey
        }
      });
      if (!response.ok) throw new Error('Error en la petición de contraseña');
      const data = await response.json();
      setRegistro(prevState => ({
        ...prevState,
        contraseña: data.random_password
      }));
    } catch (error) {
      console.error('Error generando contraseña:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRegistro(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    try {
      const response = await fetch('https://665fe2675425580055b13673.mockapi.io/api/v1/clientes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          objetivo: '',
          name: registro.name,
          foto: '',
          email: registro.email,
          telefono: registro.telefono,
          fecha_inscripcion: new Date().toISOString().split('T')[0],
          genero: '',
          contraseña: registro.contraseña
        })
      });
      if (!response.ok) throw new Error('Error en la petición');
      alert('Registro agregado con éxito');
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al agregar el registro');
    }
  };

  return (
    <div className="card-container1">
      <h1 className="teko-titulo1">Registrar</h1>
      <div>
        <InformacionRegistro registro={registro} handleChange={handleChange} handleSubmit={handleSubmit} />
      </div>
    </div>
  );
}

export default CardRegistro;
