import React from 'react';
import './ProductDetails.css';

const ProductDetails = ({ product }) => {
  return (
    <div className="product-details">
      <img src={product.image} alt={product.name} />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <h3>Price: ${product.price}</h3>
      <button>Add to Cart</button>

      <div className="reviews">
        <h4>Reviews</h4>
        <p>No reviews yet</p>
      </div>
      
      <div className="similar-products">
        <h4>Similar Products</h4>
        {/* Render similar products */}
      </div>
    </div>
  );
};

export default ProductDetails;
