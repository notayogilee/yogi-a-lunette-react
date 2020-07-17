import React from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <div id="contact">
      <div className="contact-container">
        <div className="bubbles">
          <a href="#"><div className="bubble-1"><i class="far fa-calendar-alt fa-4x"></i></div></a>
          <a href="#"><div className="bubble-2"><i class="far fa-comments fa-4x"></i></div></a>
          <a href="#"><div className="bubble-3"><i class="far fa-envelope fa-4x"></i></div></a>
        </div>
      </div>
    </div>

  )
}

export default Contact;

