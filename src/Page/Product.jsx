import React from 'react';
import ProductStyles from '../styles/ProductStyles';

function Product({ product, onAddToCart, onAddToFavorites, onClick }) {
  const { id, name, imageUrl, price } = product;

  return (
    <>
      <ProductStyles />
      <div className="product" onClick={onClick}>
        <img src={imageUrl} alt={name} className="product-image" />
        <div className="product-name">{name}</div>
        <div className="product-price">{price} DKK</div>
        <button className="product-button" onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}>Tilføj til kurv</button>
        <button className="product-button" onClick={(e) => { e.stopPropagation(); onAddToFavorites(product); }}>Tilføj til favoritter</button>
      </div>
    </>
  );
}

export default Product;
