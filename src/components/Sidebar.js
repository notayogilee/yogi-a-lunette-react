import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {

  const [open, setOpen] = useState(false);

  return (
    <nav id="sidebar">
      <div className="container">
        <a href="#" className="hamburger">
          <div className="bar-1"></div>
          <div className="bar-2"></div>
          <div className="bar-3"></div>
        </a>
        <div className="side-list">
          <ul>
            <li><Link to="/about" className="text">About</Link></li>
            <li><Link to="/videos" className="text">Videos</Link></li>
            <li><Link to="/Contact" className="text">Contact</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Sidebar;

