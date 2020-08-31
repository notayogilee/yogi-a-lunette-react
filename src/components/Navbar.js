import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="logo">
        <a href="/"><h2>Om̐</h2></a>
      </div>
      <div className="nav-list">
        <ul>
          <li><Link to="/about" className="text">
            à propos</Link></li>
          <li><Link to="/videos" className="text">
            practiquons</Link></li>
          <li><Link to="/contact" className="text">connectons</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;