import { createGlobalStyle } from 'styled-components';

const ProductManagerStyles = createGlobalStyle`
  .productManager {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: 1px solid var(--color-gray-200);
    border-radius: 15px;
    padding: 20px;
    width: 600px;
    margin: 20px auto;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #fff;
  }

  .productManager h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .productManager h2 {
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .createCarBox, .editCarBox {
    width: 100%;
    border: 1px solid var(--color-gray-200);
    border-radius: 10px;
    padding: 20px;
    margin-bottom: 20px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
  }

  .createCarBox input, .editCarBox input {
    margin-bottom: 10px;
    padding: 8px;
    border-radius: 5px;
    border: 1px solid var(--color-gray-200);
    width: calc(100% - 16px);
  }

  .createCarBox button, .editCarBox button {
    padding: 8px 20px;
    border: none;
    border-radius: 5px;
    background-color: var(--color-primary);
    color: white;
    cursor: pointer;
    transition: background-color 0.3s ease;
    margin-top: 10px;
  }

  .createCarBox button:hover, .editCarBox button:hover {
    background-color: var(--color-primary-dark);
  }

  .carList {
    width: 100%;
  }

  .productManager ul {
    list-style-type: none;
    padding: 0;
    margin: 0;
    width: 100%;
  }

  .productManager li {
    margin-bottom: 20px;
    padding: 15px;
    border: 1px solid var(--color-gray-200);
    border-radius: 10px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
    background-color: #f9f9f9;
    display: flex;
    justify-content: space-between;
  }

  .productManager .productBox {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .productManager .productBox h3 {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .productManager .productBox p {
    margin: 5px 0;
  }

  .productManager .productBox .editDeleteButtons {
    margin-top: 10px;
  }

  .productManager .editDeleteButtons button {
    margin-right: 10px;
  }

  .editCarBox {
    margin-left: 20px;
    flex: 1;
  }
`;

export default ProductManagerStyles;
