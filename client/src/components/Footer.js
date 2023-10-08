import React from 'react';
import './Footer.scss';

function Footer() {
    return (
    <footer className="footer">
    <div className="logo">
        <span className="smooth">Smooth</span>
        <span className="move-inc">Move.INC</span>
    </div>
    <div className="categories">
        <div className="category">
        <h3>Crypto</h3>
        <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Buy NFTs</a></li>
            <li><a href="#">Sell NFTs</a></li>
        </ul>
        </div>
        <div className="category">
        <h3>Market</h3>
        <ul>
            <li><a href="#">Browse NFTs</a></li>
            <li><a href="#">Buy NFTs</a></li>
            <li><a href="#">Sell NFTs</a></li>
        </ul>
        </div>
        <div className="category">
        <h3>Contact</h3>
        <ul>
            <li><a href="#">Email</a></li>
            <li><a href="#">LinkedIn</a></li>
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Twitter</a></li>
        </ul>
        </div>
    </div>
    <div className="newsletter">
        <h3>Join Our Newsletter</h3>
        <div className="email-container">
          <input type="email" placeholder="Enter your email" />
          <button type="submit">Subscribe</button>
        </div>
    </div>
    </footer>
);
}

export default Footer;
