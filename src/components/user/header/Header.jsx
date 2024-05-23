import React from 'react';
import './header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <h1>ShopLogo</h1>
      </div>
      <nav className="nav-links">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/shop">Shop</a></li>
          <li><a href="/contact">Contact</a></li>
          <li><a href="/blog">Blog</a></li>
        </ul>
      </nav>
      <div className="icons">
        <a href="/wishlist" className="wishlist-icon"><i className="fas fa-heart"></i></a>
        <a href="/cart" className="cart-icon"><i className="fas fa-shopping-cart"></i></a>
        <a href="/login" className="login-icon"><i className="fas fa-user"></i></a>
      </div>
    </header>
  );
};

export default Header;