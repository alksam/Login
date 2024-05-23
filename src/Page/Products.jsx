import React, { useState } from 'react';
import ProductDetails from './ProductDetail';
import Product from './Product';
import Cart from './Cart';
import Favorites from './Favorites';


const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    padding: '20px'
  },
  tabs: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: '20px'
  },
  tab: {
    marginRight: '10px',
    cursor: 'pointer'
  },
  productsContainer: {
    display: 'flex',
    justifyContent: 'center'
  },
  products: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '20px',
    maxWidth: '1200px',
    margin: '0 auto'
  },
  homeButton: {
    marginTop: '20px',
    backgroundColor: '#007bff',
    color: 'white',
    border: 'none',
    padding: '10px 20px',
    cursor: 'pointer',
    borderRadius: '5px'
  }
};



const initialProducts = [
    { id: 1, name: 'Smartphone X', imageUrl: 'https://source.unsplash.com/random/300x300?phone', price: 799, quantity: 5 },
    { id: 2, name: 'Laptop Pro', imageUrl: 'https://source.unsplash.com/random/300x300?laptop', price: 1299, quantity: 10 },
    { id: 3, name: 'Wireless Headphones', imageUrl: 'https://source.unsplash.com/random/300x300?headphones', price: 199, quantity: 15 },
    { id: 4, name: 'Smartwatch Series 5', imageUrl: 'https://source.unsplash.com/random/300x300?smartwatch', price: 299, quantity: 20 },
    { id: 5, name: '4K Television', imageUrl: 'https://source.unsplash.com/random/300x300?television', price: 999, quantity: 25 },
    { id: 6, name: 'Bluetooth Speaker', imageUrl: 'https://source.unsplash.com/random/300x300?speaker', price: 149, quantity: 30 },
    { id: 7, name: 'Gaming Console', imageUrl: 'https://source.unsplash.com/random/300x300?console', price: 499, quantity: 8 },
    { id: 8, name: 'Digital Camera', imageUrl: 'https://source.unsplash.com/random/300x300?camera', price: 599, quantity: 12 },
    { id: 9, name: 'Tablet Pro', imageUrl: 'https://source.unsplash.com/random/300x300?tablet', price: 399, quantity: 18 },
    { id: 10, name: 'Smart Home Hub', imageUrl: 'https://source.unsplash.com/random/300x300?home', price: 129, quantity: 50 },
    { id: 11, name: 'Fitness Tracker', imageUrl: 'https://source.unsplash.com/random/300x300?tracker', price: 89, quantity: 35 },
    { id: 12, name: 'VR Headset', imageUrl: 'https://source.unsplash.com/random/300x300?vr', price: 299, quantity: 14 },
    { id: 13, name: 'Drone Camera', imageUrl: 'https://source.unsplash.com/random/300x300?drone', price: 899, quantity: 7 },
    { id: 14, name: 'Portable Charger', imageUrl: 'https://source.unsplash.com/random/300x300?charger', price: 39, quantity: 40 },
    { id: 15, name: 'Electric Toothbrush', imageUrl: 'https://source.unsplash.com/random/300x300?toothbrush', price: 79, quantity: 60 },
    { id: 16, name: 'Noise Cancelling Headphones', imageUrl: 'https://source.unsplash.com/random/300x300?headphones', price: 299, quantity: 20 },
    { id: 17, name: 'Smart Light Bulb', imageUrl: 'https://source.unsplash.com/random/300x300?lightbulb', price: 19, quantity: 100 },
    { id: 18, name: 'Electric Kettle', imageUrl: 'https://source.unsplash.com/random/300x300?kettle', price: 49, quantity: 30 },
    { id: 19, name: 'Smart Thermostat', imageUrl: 'https://source.unsplash.com/random/300x300?thermostat', price: 199, quantity: 15 },
    { id: 20, name: 'Robot Vacuum Cleaner', imageUrl: 'https://source.unsplash.com/random/300x300?vacuum', price: 399, quantity: 10 }
];



function Products() {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);
  const [currentTab, setCurrentTab] = useState('products');
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductClick = (product) => {
    setSelectedProduct(product);
  };

  const handleAddToFavorites = (product) => {
    setFavorites([...favorites, product]);
  };

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div style={styles.container}>
      <h1 style={{textAlign: 'center'}}>Produkter</h1>
      <div style={styles.tabs}>
        <div
          style={{ ...styles.tab, fontWeight: currentTab === 'products' ? 'bold' : 'normal' }}
          onClick={() => setCurrentTab('products')}
        >
          Produkter
        </div>
        <div
          style={{ ...styles.tab, fontWeight: currentTab === 'favorites' ? 'bold' : 'normal' }}
          onClick={() => setCurrentTab('favorites')}
        >
          Favoritter
        </div>
        <div
          style={{ ...styles.tab, fontWeight: currentTab === 'cart' ? 'bold' : 'normal' }}
          onClick={() => setCurrentTab('cart')}
        >
          Kurv
        </div>
      </div>
      {currentTab === 'products' && (
        <div style={styles.products}>
          {initialProducts.map(product => (
            <Product
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
              onAddToFavorites={handleAddToFavorites}
              onClick={() => handleProductClick(product)}
            />
          ))}
        </div>
      )}
      {currentTab === 'favorites' && <Favorites favorites={favorites} />}
      {currentTab === 'cart' && <Cart cart={cart} />}
      {selectedProduct && (
        <ProductDetails product={selectedProduct} />
      )}
    </div>
  );
}

export default Products;