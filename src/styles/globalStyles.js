import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  :root {
    --color-primary: #007bff;
    --color-secondary: #6c757d;
    --color-success: #28a745;
    --color-error: #dc3545;
    --color-gray-50: #f8f9fa;
    --color-gray-100: #e9ecef;
    --color-gray-200: #ced4da;
    --color-gray-300: #adb5bd;
    --font-family: 'Sedan SC', sans-serif;
    --font-size-base: 16px;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: var(--font-family);
    font-size: var(--font-size-base);
    font-size: 30px;
  }

  body {
    font-size: var(--font-size-base);
    background-color: var(--color-gray-50);
    color: var(--color-gray-300);
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 1rem;
    color: var(--color-primary);
  }

  header {
    background-color: var(--color-primary);
    color: var(--color-white);
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  nav {
    display: flex;
    gap: 1rem;
  }

  nav a {
    color: var(--color-gray-300);
    text-decoration: none;
    transition: color 0.3s ease;
  }

  nav a:hover {
    color: var(--color-secondary);
  }

  form {
    width: 100%;
    max-width: 600px;
    margin: 0 auto;
    padding: 2rem;
    background-color: var(--color-gray-100);
    border-radius: 20px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  input,
  button {
    display: block;
    width: 100%;
    padding: 0.5rem;
    margin-bottom: 1rem;
    border: 1px solid var(--color-gray-200);
    border-radius: 4px;
    font-size: 1rem;
  }

  button {
    background-color: var(--color-primary);
    color: var(--color-white);
    border: none;
    padding: 0.75rem 1rem;
    border-radius: 4px;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }

  button:hover {
    background-color: var(--color-secondary);
  }
`;

export default GlobalStyles;
