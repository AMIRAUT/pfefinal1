// ProductList.js
import React from 'react';
import Product from './productList1';

const ProductList = ({ products }) => {
  return (
    <div className="product-list">
      {products.map(product => (
        <Product key={product._id} product={product} />
      ))}
    </div>
  );
}

export default ProductList1;
// src/components/ProductList.js
import React from 'react';
import Product from './Product';

const productList1 = ({ products }) => {
  return (
    <div className="container">
      <div className="row">
        {products.map(product => (
          <Product key={product._id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default ProductList1;

