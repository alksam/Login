import { BASE_URL_DEV } from './globalVariables.js';

const registerService = async (userData) => {
  const registerUrl = `${BASE_URL_DEV}/auth/register`;

  const response = await fetch(registerUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(userData)
  }).then(res => {
    console.log(res);
    return res.json();
  }).catch(error => {
    console.error('There was a problem with the fetch operation:', error);
    throw error;
  });

  return await response;
};

// Eksempel på brug:
const userData = {
  name: 'ha',
  password: '36',
  email: 'vvvv@hhhhssss.com',
  phoneNumber: '554144422'
};

registerService(userData)
  .then(data => console.log('Registration successful:', data))
  .catch(error => console.error('Registration error:', error));

export default registerService;