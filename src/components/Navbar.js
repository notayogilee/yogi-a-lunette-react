import React from 'react';
import { Link } from 'react-router-dom';
import asana_lotus from '../img/asana_lotus.png';

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="logo">
        <a href="/"><img src={asana_lotus} alt="lotus" className="nav-img" /></a>
      </div>
      <h3>Yogi A Lunette</h3>
      <div className="nav-list">
        <ul>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/videos">Videos</Link></li>
          <li><Link to="/Contact">Contact</Link></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar;