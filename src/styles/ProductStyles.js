import { createGlobalStyle } from 'styled-components';

const ProductStyles = createGlobalStyle`

  /* Generelle stilarter */
  .container {
    font-family: Arial, sans-serif;
    padding: 20px;
    text-align: center;
  }

  .tabs {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .tab {
    margin: 0 10px;
    cursor: pointer;
  }

  .home-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 5px;
    margin-bottom: 20px;
  }

  /* Produktliste stilarter */
  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 20px;
  }

  .product {
    border: 1px solid #ddd;
    border-radius: 5px;
    padding: 10px;
    text-align: center;
    width: 200px;
    box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
    transition: box-shadow 0.3s ease-in-out;
    cursor: pointer;
    margin-bottom: 20px;
  }

  .product:hover {
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  }

  .product-image {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  .product-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .product-price {
    font-size: 16px;
    margin-bottom: 10px;
  }

  .product-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 8px 16px;
    cursor: pointer;
    border-radius: 5px;
    margin-right: 5px;
  }

  /* Produkt detaljer stilarter */
  .product-details-container {
    margin-top: 20px;
  }

  .product-details-container img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }

  .product-details-container .product-name {
    font-size: 18px;
    font-weight: bold;
    margin-bottom: 5px;
  }

  .product-details-container .product-price {
    font-size: 16px;
    margin-bottom: 10px;
  }
`;

export default ProductStyles;
