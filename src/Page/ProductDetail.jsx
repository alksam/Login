import React from 'react';

const styles = {
  container: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto'
  },
  image: {
    width: '100%',
    height: 'auto',
    marginBottom: '20px'
  },
  productName: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  productPrice: {
    fontSize: '18px',
    marginBottom: '10px'
  },
  productDescription: {
    fontSize: '16px'
  }
};

function ProductDetails({ product }) {
  const { name, imageUrl, price, description } = product;

  return (
    <div style={styles.container}>
      <img src={imageUrl} alt={name} style={styles.image} />
      <div style={styles.productName}>{name}</div>
      <div style={styles.productPrice}>{price} DKK</div>
      <div style={styles.productDescription}>{description}</div>
    </div>
  );
}

export default ProductDetails;
