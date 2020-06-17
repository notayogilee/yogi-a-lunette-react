import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/videos">Videos</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
      </ul>
    </nav>
  )
}

export default Navbar;