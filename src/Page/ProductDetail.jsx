import React from 'react';
import ProductStyles from '../styles/ProductStyles';

function ProductDetails({ product }) {
  const { name, imageUrl, price, description } = product;

  return (
    <>
      <ProductStyles />
      <div className="product-container">
        <img src={imageUrl} alt={name} className="product-image" />
        <div className="product-name">{name}</div>
        <div className="product-price">{price} DKK</div>
        <div className="product-description">{description}</div>
      </div>
    </>
  );
}

export default ProductDetails;