import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.scss';

const Sidebar = () => {

  const [show, setShow] = useState(false);

  return (
    <Fragment>
      <div className="menu-wrap">
        <input type="checkbox" id="togglerCheckbox" className="toggler" onClick={() => setShow(!show)} />

        <div className="hamburger">
          <div></div>
        </div>
      </div>

      {show &&
        <div id="sidebar">
          <div className="links">
            <div className="side-list">
              <ul>
                <li><Link onClick={() => { setShow(!show); document.getElementById("togglerCheckbox").checked = false; }} to="/" >Om̐</Link></li>
                <li><Link onClick={() => { setShow(!show); document.getElementById("togglerCheckbox").checked = false; }} to="/about" > à propos</Link></li>
                <li><Link onClick={() => { setShow(!show); document.getElementById("togglerCheckbox").checked = false; }} to="/videos" >practiquons</Link></li>
                {/* <li><Link onClick={() => { setShow(!show); document.getElementById("togglerCheckbox").checked = false; }} to="/pranayama" >respirons</Link></li> */}
                <li><Link onClick={() => { setShow(!show); document.getElementById("togglerCheckbox").checked = false; }} to="/contact" >connectons</Link></li>
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
      }
    </Fragment>
  )
}

export default Sidebar;

