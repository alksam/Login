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

function Favorites({ favorites }) {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Favoritter</h2>
      {favorites.length === 0 ? (
        <p style={styles.emptyMessage}>Ingen favoritter tilføjet endnu.</p>
      ) : (
        <ul style={styles.list}>
          {favorites.map((favorite) => (
            <li key={favorite.id} style={styles.listItem}>{favorite.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Favorites;
