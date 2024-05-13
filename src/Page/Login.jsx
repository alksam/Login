import React, { useState } from 'react';
    import { BASE_URL_DEV } from '../services/globalVariables';
    
    
    const Login = () => {
      const [username, setUsername] = useState('');
      const [password, setPassword] = useState('');
      const [loginError, setLoginError] = useState('');
      const [loginSuccess, setLoginSuccess] = useState(false);
    
      const handleLogin = async (event) => {
        event.preventDefault(); // Forhindrer standardformularindsendelse
    
        try {
          const response = await fetch(`${BASE_URL_DEV}/auth/login`, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              name: username,
              password: password,
            }),
          });
    
          const data = await response.json();
    
          if (response.ok) {
            // Login successful
            console.log('Login successful:', data);
            // Tilføj yderligere logik her (f.eks. navigering til en anden side)
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
    
   
    
export default Login;