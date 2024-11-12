import React from 'react';
import './ProductGrid.css';

const products = [
  { id: 1, name: 'Baby Toy', price: 19.99, image: '/path/to/image1.jpg' },
  { id: 2, name: 'Baby Clothing', price: 29.99, image: '/path/to/image2.jpg' },
  // Add more products
];

const ProductGrid = () => {
  return (
    <div className="product-grid">
      {products.map(product => (
        <div key={product.id} className="product-card">
          <img src={product.image} alt={product.name} />
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <button>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
