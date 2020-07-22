import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {

  const [hidden, setHidden] = useState("");

  return (
    <div className="big-container">
      <div className="hamburger">
        <a onClick={() => { setHidden("hidden") }} href="#">
          <div className="bar-1"></div>
          <div className="bar-2"></div>
          <div className="bar-3"></div>
        </a>
      </div>
      <div id="sidebar" className={hidden}>
        <div className="sidebar-container">
          <Fragment>
            <div className="x-hamburger">
              <a onClick={() => { setHidden("") }} href="#">
                <div className="bar-4"></div>
                <div className="bar-5"></div>
                <div className="bar-6"></div>
              </a>
            </div>
            <div className="links">
              <div className="side-list">
                <ul>
                  <li><Link onClick={() => { setHidden("") }} to="/about" >About</Link></li>
                  <li><Link onClick={() => { setHidden("") }} to="/videos" >Videos</Link></li>
                  <li><Link onClick={() => { setHidden("") }} to="/contact" >Contact</Link></li>
                </ul>
              </div>
              <div className="social">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/pages/category/Yoga-Studio/Yogi-a-Lunette-252704625430721/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square fa-2x"></i></a>
                  </li>
                  <li>
                    <a href="https://www.youtube.com/channel/UC9u2sGj3VZpR0KAGCF_BvUw" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube-square fa-2x"></i></a>
                  </li>
                  <li>
                    <a href="https://www.instagram.com/yogialunette/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram-square fa-2x"></i></a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/claudia-viens-8233b1aa/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i></a>
                  </li>
                </ul>
              </div>
            </div>
          </Fragment>
        </div>
      </div>
    </div>
  )
}

export default Sidebar;

