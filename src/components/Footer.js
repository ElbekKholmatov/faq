import React from 'react';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Uzbekistan Telecom FAQ</h3>
            <p>Your comprehensive guide to telecommunication services in Uzbekistan.</p>
          </div>
          
          <div className="footer-section">
            <h3>Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#faq">FAQ</a></li>
              <li><a href="#operators">Operators</a></li>
              <li><a href="#about">About</a></li>
            </ul>
          </div>
          
          <div className="contact-info">
            <p><strong>Email:</strong> <a href="mailto:exolmatov99@gmail.com">exolmatov99@gmail.com</a></p>
            <p><strong>Phone:</strong> <a href="tel:+998976437740">+998 97 643 77 40</a></p>
            <p><strong>Telegram:</strong> <a href="https://t.me/ElbekKholmatov" target="_blank" rel="noopener noreferrer">t.me/ElbekKholmatov</a></p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Uzbekistan Telecom FAQ. All rights reserved by Elbek Xolmatov.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;