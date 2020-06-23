import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav id="navbar">
      <div className="logo">
        <a href="/">HOME</a>
      </div>
      {/* <h3 className="title" >Yogi A Lunette</h3> */}
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