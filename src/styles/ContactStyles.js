import { createGlobalStyle } from 'styled-components';

const ContactStyles = createGlobalStyle`
  .contactContainer {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #f9f9f9;
  }

  .contactForm {
    display: flex;
    flex-direction: column;
  }

  .formGroup {
    margin-bottom: 15px;
  }

  .formGroup label {
    font-weight: bold;
  }

  .formGroup input[type="text"],
  .formGroup input[type="email"],
  .formGroup textarea {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-sizing: border-box;
    margin-top: 5px;
    resize: none;
  }

  .formGroup button[type="submit"] {
    padding: 10px 20px;
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .formGroup button[type="submit"]:hover {
    background-color: #0056b3;
  }
`;

export default ContactStyles;
