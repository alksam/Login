import { BASE_URL_DEV } from './globalVariables.js';


const Login = async (name, password) => {
  console.log(name, password);
  console.log(BASE_URL_DEV);

  try {
    const response = await fetch(`${BASE_URL_DEV}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        password: password
      })
    });

    const data = await response.json(); // Venter på at hente JSON-data fra responsen

    console.log(data);

    if (response.ok) {
      // Login successful
      console.log('Login successful:', data);
    } else {
      // Login failed
      console.error('Login failed:', data);
    }

  } catch (e) {
    console.error('Login error:', e);
  }
};

Login("stev", "123");
