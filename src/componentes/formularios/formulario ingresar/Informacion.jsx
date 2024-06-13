import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import "./Informacion.css";

const Informacion = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleLogin = async () => {
    console.log('Attempting to log in with', { email, password });

    try {
      const response = await axios.get('https://666b18167013419182d23dae.mockapi.io/login');
      console.log('Response from API:', response.data);

      const user = response.data.find(user => user.email === email && user.contrasena === password);
      
      if (user) {
        console.log('Login successful, navigating to home page');
        navigate('/');
      } else {
        console.log('Login failed: incorrect credentials');
        setError('Login failed. Please check your credentials.');
      }
    } catch (error) {
      console.error('An error occurred during login:', error);
      setError('An error occurred during login.');
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
        
        {error && <div className='error'>{error}</div>}
        
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
