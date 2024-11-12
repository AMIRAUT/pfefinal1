import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-text">
        <h1>Welcome to Magasin de Bayen</h1>
        <p>Discover baby essentials and special offers</p>
        <button>Shop Now</button>
      </div>
      <div className="hero-image">
        <img src="/path/to/featured-image.jpg" alt="Featured Products" />
      </div>
    </section>
  );
};

export default HeroSection;
