import { BASE_URL_DEV } from './globalVariables.js';

const registerService = async (userData) => {
  const registerUrl = `${BASE_URL_DEV}/auth/register`;

  try {
    const response = await fetch(registerUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(userData)
    });
    console.log(response);

    const data = await response.json();

    if (response.ok) {
      console.log('User registration successful:', data);
      // Tilføj yderligere logik efter vellykket registrering
    } else {
      console.error('User registration failed:', data);
      // Håndter fejl efter mislykket registrering
    }

  } catch (error) {
    console.error('Error during user registration:', error);
    // Håndter eventuelle fejl under registrering
  }
};

// Eksempel på brug:
const userData = {
  name: 'mohamed',
  password: '31869446',
  email: 'vvvv@hhhh.com',
  phoneNumber: '55444422'
};

registerService(userData);
export default registerService; 