import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Login } from '../services/Api';
;
    
  
function Loginserver ()  {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const [loginSuccess, setLoginSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (loginSuccess) {
      navigate('/carmanager'); // Naviger til car-manager-siden ved loginSuccess
    }
  }, [loginSuccess, navigate]);

  const handleLogin = async (event) => {
    event.preventDefault(); // Forhindrer standardformularindsendelse

    try {
      console.log("UNAME: ", username)
      console.log("PWORD: ", password)
      const data = await Login(username, password); // Kald Login-funktionen fra Api.js

      console.log("DATA: ", data)

      if (data && data.token) {
        // Login successful
        console.log('Login successful:', data);
        localStorage.setItem('token', data.token); // Gem token i localStorage
        setLoginSuccess(true); // Opdater loginSuccess til true
      } else {
        // Login failed
        console.error('Login failed:', data);
        setLoginError('Login failed. Please check your credentials.');
      }

    } catch (error) {
      console.error('Login error:', error);
      setLoginError('Login failed. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleLogin}>
        <h1>Login</h1>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
    </div>
  );
};

export default Loginserver;