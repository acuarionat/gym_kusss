import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Informacion.css";

const Informacion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    if (!email || !password || !role) {
      setError('Por favor, rellena todos los espacios en blanco.');
      return;
    }

    try {
      const response = await axios.get('https://666b18167013419182d23dae.mockapi.io/login');
      const user = response.data.find(user => user.email === email && user.contrasena === password);

      if (user) {
        if (role === 'client' && user.rol !== '1') {
          setError('No existe usuario con ese rol.');
          navigate('/nosotros');
          return;
        } else if (role === 'trainer' && user.rol !== '0') {
          setError('No existe usuario con ese rol.');
          navigate('/nosotros');
          return;
        }

        localStorage.setItem("user", JSON.stringify(user));
        
        let apiURL = '';
        if (role === 'client') {
          apiURL = 'https://665fe2675425580055b13673.mockapi.io/api/v1/clientes';
        } else if (role === 'trainer') {
          apiURL = 'https://6669267d2e964a6dfed3f9ee.mockapi.io/api/v3/entrenadores';
        }

        const additionalResponse = await axios.get(apiURL);
        const additionalData = additionalResponse.data.find(item => item.email === email);

        if (additionalData) {
          localStorage.setItem("additionalId", additionalData.id);
        } else {
          console.log('No se encontró el ID adicional');
        }

        console.log('Login correcto!');
      } else {
        console.log('Login failed: incorrect credentials');
        setError('Datos incorrectos.');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      setError('ERROR.');
    }
  };

  return (
    <div>
      <div className='contenedorLogin-informacion'>
        <h2 className="titulo1-informacion1">Ingresar</h2>

        <h3 className="parrafo-informacion1">Correo</h3>
        <input
          type="text"
          className='input-text-informacion1 input-informacion1'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <h3 className="parrafo-informacion1">Contraseña</h3>
        <input
          type="password"
          className='input-text-informacion1 input-informacion1'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <h3 className="parrafo-informacion1">Rol</h3>
        <div className="radio-container">
          <label className="parrafo-informacion1">
            <input
              type="radio"
              value="client"
              checked={role === 'client'}
              onChange={(e) => setRole(e.target.value)}
            />
            Cliente
          </label>
          <label className="parrafo-informacion1" >
            <input
              type="radio"
              value="trainer"
              checked={role === 'trainer'}
              onChange={(e) => setRole(e.target.value)}
            />
            Entrenador
          </label>
        </div>
        {error && <div className="titulob-informacion1">{error}</div>}
        <div className='button-container-informacion1'>
          <button className='button-informacion1' onClick={handleLogin}>
            <h2 className="titulob-informacion1">ACEPTAR</h2>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Informacion;
