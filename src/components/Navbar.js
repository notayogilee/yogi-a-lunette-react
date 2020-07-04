import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="logo">
        <a href="/"><i class="fas fa-home fa-2x"></i></a>
      </div>
      <div className="nav-list">
        <ul>
          <li><Link to="/about" className="text">About</Link></li>
          <li><Link to="/videos" className="text">Videos</Link></li>
          <li><Link to="/Contact" className="text">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;