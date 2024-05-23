import React from 'react';

const styles = {
  product: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center',
    width: '200px',
    boxShadow: '0px 0px 5px rgba(0, 0, 0, 0.1)',
    transition: 'box-shadow 0.3s ease-in-out',
    cursor: 'pointer'
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: '10px'
  },
  productName: {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '5px'
  },
  productPrice: {
    fontSize: '16px',
    marginBottom: '10px'
  },
  button: {
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '8px 16px',
    cursor: 'pointer',
    borderRadius: '5px',
    marginRight: '5px'
  }
};

function Product({ product, onAddToCart, onAddToFavorites, onClick }) {
  const { id, name, imageUrl, price } = product;

  return (
    <div style={styles.product} onClick={onClick}>
      <img src={imageUrl} alt={name} style={styles.image} />
      <div style={styles.productName}>{name}</div>
      <div style={styles.productPrice}>{price} DKK</div>
      <button style={styles.button} onClick={(e) => { e.stopPropagation(); onAddToCart(product); }}>Tilføj til kurv</button>
      <button style={styles.button} onClick={(e) => { e.stopPropagation(); onAddToFavorites(product); }}>Tilføj til favoritter</button>
    </div>
  );
}

export default Product;
