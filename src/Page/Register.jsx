import React, { Component } from 'react';
import { BASE_URL_DEV } from '../services/globalVariables';
import registerService from '../services/apiCreate';


class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      password: '',
      email: '',
      phoneNumber: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();

    const { name, password, email, phoneNumber } = this.state;
    const userData = { name, password, email, phoneNumber };

    try {
      await registerService(userData); // Kalder registerService med brugerdata
      console.log('User registration successful!');
      // Clear form fields efter succesfuld registrering
      this.setState({ name: '', password: '', email: '', phoneNumber: '' });
      // Tilføj yderligere logik eller navigering efter vellykket registrering
    } catch (error) {
      console.error('User registration error:', error);
      // Håndter fejl under registrering
    }
  };

  render() {
    return (
      <div>
        
        <form onSubmit={this.handleSubmit}>
            <h2>Register</h2>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={this.state.name}
            onChange={this.handleInputChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.handleInputChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={this.state.email}
            onChange={this.handleInputChange}
            required
          />
          <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            value={this.state.phoneNumber}
            onChange={this.handleInputChange}
            required
          />
          <button type="submit">Register</button>
        </form>
      </div>
    );
  }
}

export default Register;
