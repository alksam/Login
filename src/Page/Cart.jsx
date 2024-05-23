import React from 'react';

const styles = {
  container: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginTop: '20px'
  },
  title: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '10px'
  },
  emptyMessage: {
    fontStyle: 'italic'
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0
  },
  listItem: {
    marginBottom: '5px'
  }
};

function Cart({ cart }) {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Kurv</h2>
      {cart.length === 0 ? (
        <p style={styles.emptyMessage}>Kurven er tom.</p>
      ) : (
        <ul style={styles.list}>
          {cart.map((item) => (
            <li key={item.id} style={styles.listItem}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Cart;
