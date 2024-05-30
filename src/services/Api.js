import { BASE_URL_DEV } from './globalVariables.js';


export const Login = async (name, password) => {
  console.log(name, password);
  console.log(BASE_URL_DEV);


    const response = await fetch(`${BASE_URL_DEV}/auth/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name: name,
        password: password
      })
    }).then(res => {

      console.log(res);

      return res.json();

    });

    return await response;

};

Login("qm", "53655");

