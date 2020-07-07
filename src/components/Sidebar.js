import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {

  const [open, setOpen] = useState(false);
  // const [hidden, setHidden] = useState("");

  return (

    <div id="sidebar">
      <div className="container">
        {!open &&
          <div className="hamburger">
            <a onClick={() => setOpen(true)} href="#">
              <div className="bar-1"></div>
              <div className="bar-2"></div>
              <div className="bar-3"></div>
            </a>
          </div>
        }
        {open &&
          <Fragment>
            <div className="hamburger">
              <a onClick={() => setOpen(false)} href="#">
                <div className="bar-4"></div>
                <div className="bar-5"></div>
                <div className="bar-6"></div>
              </a>
            </div>
            <div className="links">
              <div className="side-list">
                <ul>
                  <li><Link to="/about" >About</Link></li>
                  <li><Link to="/videos" >Videos</Link></li>
                  <li><Link to="/Contact" >Contact</Link></li>
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
        }
      </div>
    </div >
  )
}

export default Sidebar;

