import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {

  const [slide, setSlide] = useState('');

  return (
    <div id="contact">
      <div className="contact-container">
        <div className="bubbles">
          <a href="#" className={slide}><div className="bubble-1"><i class="far fa-calendar-alt fa-4x"></i></div></a>
          <div className="schedule"></div>
          <a href="#" className={slide}><div className="bubble-2"><i class="far fa-comments fa-4x"></i></div></a>
          <div className="schedule"></div>
          <a href="#" className={slide}><div className="bubble-3"><i class="far fa-envelope fa-4x"></i></div></a>
          <div className="schedule"></div>
        </div>
      </div>
    </div>

  )
}

export default Contact;

