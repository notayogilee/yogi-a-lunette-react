import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {

  const [show, setShow] = useState("");
  // const [toggle, setToggle] = useState("");

  return (
    <Fragment>
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" onClick={() => setShow("show")} />
        <div className="hamburger"><div></div></div>

        {/* <div className="menu">
        <div>
          <div>
            <ul>
              <li><Link onClick={() => { setShow("") }} to="/about" >About</Link></li>
              <li><Link onClick={() => { setShow("") }} to="/videos" >Videos</Link></li>
              <li><Link onClick={() => { setShow("") }} to="/contact" >Contact</Link></li>
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
      </div> */}
      </div>

      <div className="big-container">
        {/* <div className="hamburger">
          <a onClick={() => { setShow("show") }} href="#">
            <div className="bar-1"></div>
            <div className="bar-2"></div>
            <div className="bar-3"></div>
          </a>
        </div> */}
        <div id="sidebar" className={show}>
          <div className="sidebar-container">

            <div className="x-hamburger">
              <a onClick={() => { setShow("") }} href="#">
                <div className="bar-4"></div>
                <div className="bar-5"></div>
                <div className="bar-6"></div>
              </a>
            </div>
            <div className="links">
              <div className="side-list">
                <ul>
                  <li><Link onClick={() => { setShow("") }} to="/about" >About</Link></li>
                  <li><Link onClick={() => { setShow("") }} to="/videos" >Videos</Link></li>
                  <li><Link onClick={() => { setShow("") }} to="/contact" >Contact</Link></li>
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
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default Sidebar;

