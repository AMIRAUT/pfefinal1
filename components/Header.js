import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Magasin de Bayen</div>
      <nav className="nav">
        <ul>
          <li><a href="#clothing">Clothing</a></li>
          <li><a href="#toys">Toys</a></li>
          <li><a href="#essentials">Essentials</a></li>
        </ul>
      </nav>
      <div className="search">
        <input type="text" placeholder="Search products..." />
      </div>
      <div className="user-profile">
        <a href="#profile">Profile</a>
        <a href="#cart">Cart (0)</a>
      </div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/cart">Cart</Link></li>
          <li><Link to="/profile">Profile</Link></li>
        </ul>
        </nav>
    </header>
  );
};

export default Header;
