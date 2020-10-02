import React from 'react';
import './Footer.scss';

const Footer = () => {
  return (
    <footer id="footer">
      <div className="social">
        <a href="https://www.facebook.com/pages/category/Yoga-Studio/Yogi-a-Lunette-252704625430721/" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-square fa-2x"></i></a>
        <a href="https://www.youtube.com/channel/UC9u2sGj3VZpR0KAGCF_BvUw" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube-square fa-2x"></i></a>
        <a href="https://www.instagram.com/yogialunette/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram-square fa-2x"></i></a>
        <a href="https://www.linkedin.com/in/claudia-viens-8233b1aa/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin fa-2x"></i></a>
      </div>
    </footer>
  )
}

export default Footer;