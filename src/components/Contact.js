import React, { useState } from 'react';
import './Contact.scss';

const Contact = () => {

  const [transition, setTransition] = useState(false);
  const [id, setId] = useState(0);

  const undoTransition = function () {
    setId(0); setTransition(false);
  }

  return (
    <div className="contact-page">
      <div className="contact-container">
        <div className="bubbles">
          <a href="#" onClick={(() => { setId(1); setTransition(!transition) })} >
            <div className="bubble-1">
              <i class="far fa-calendar-alt fa-4x"></i>
              <h1>Schedule</h1>
            </div>
          </a>
          <a href="#" onClick={(() => { setId(2); setTransition(!transition) })}>
            <div className="bubble-2">
              <i class="far fa-envelope fa-4x"></i>
              <h1>contact</h1>

            </div>
          </a>
          {/* <a href="#" onClick={(() => { setId(3); setTransition(!transition) })}>
            <div className="bubble-3">
              <i class="far fa-envelope fa-4x"></i>
              <h1>message</h1>
            </div>
          </a> */}
          {/* {transition && id === 1 &&} */}

          {transition && id === 2 &&
            // Added double click because of google complete action - can change to single click
            <div className="contact" onClick={undoTransition}>
              <div id="contact-form">
                <h2>yogialunette@gmail.com</h2>

                <form name="contact" method="post" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
                  <div onClick="(e) => e.preventDefault()" className="text-fields">
                    <input type="text" name="name" className="text-input name-input" placeholder="Name" />
                  </div>
                  <div onClick="(e) => e.preventDefault()" className="text-fields">
                    <input type="email" name="email" className="text-input email-input" placeholder="Your email address" />
                  </div>
                  <div onClick="(e) => e.preventDefault()" className="text-fields">
                    <input type="text" name="subject" className="text-input subject-input" placeholder="Subject" />
                  </div>
                  <div onClick="(e) => e.preventDefault()" className="text-fields">
                    <textarea name="message" className="text-input message-input" placeholder="Enter Message"></textarea>
                  </div>
                  <button className="message-button" type="submit">SUBMIT</button>
                </form>
              </div>
            </div>
          }

          {/* {transition && id === 3 &&} */}

        </div>
      </div>
    </div >
  )
}

export default Contact;

