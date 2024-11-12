import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="policies">
        <a href="#policy">Privacy Policy</a>
        <a href="#terms">Terms of Service</a>
      </div>
      <div className="social-media">
        <a href="#facebook">Facebook</a>
        <a href="#instagram">Instagram</a>
      </div>
      <div className="newsletter">
        <input type="email" placeholder="Sign up for our newsletter" />
        <button>Subscribe</button>
      </div>
    </footer>
  );
};

export default Footer;
