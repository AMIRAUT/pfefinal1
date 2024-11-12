// Cart.js
import React from 'react';

const Cart = ({ cartItems }) => {
  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.map(item => (
        <div key={item._id}>
          <p>{item.name}</p>
          <p>{item.quantity}</p>
        </div>
      ))}
    </div>
  );
}

export default Cart;
