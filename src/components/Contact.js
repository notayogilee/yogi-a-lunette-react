import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {

  const [slide, setSlide] = useState("");


  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="bubbles">
          <a href="#" onClick={(() => setSlide("slide"))} >
            <div className="bubble-1">
              <i class="far fa-calendar-alt fa-4x"></i>
              <h1>Schedule</h1>
            </div>
          </a>
          <a href="#" onClick={(() => setSlide("slide"))}>
            <div className="bubble-2">
              <i class="far fa-comments fa-4x"></i>
              <h1>contact</h1>
              <div className="contact">
                <h2>claudiaviens@gmail.com</h2>
                <a href="https://www.facebook.com/pages/category/Yoga-Studio/Yogi-a-Lunette-252704625430721/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-facebook-square fa-2x"></i>
                </a>
                <a href="https://www.linkedin.com/in/claudia-viens-8233b1aa/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin fa-2x"></i>
                </a>
              </div>
            </div>
          </a>
          <a href="#" onClick={(() => setSlide("slide"))}>
            <div className="bubble-3">
              <i class="far fa-envelope fa-4x"></i>
              <h1>message</h1>
            </div>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Contact;

