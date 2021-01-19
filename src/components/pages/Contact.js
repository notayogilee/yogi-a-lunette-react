import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

          <a href="#!" onClick={(() => { setId(1); setTransition(!transition) })} >
            <div className="bubble-1">
              <i className="far fa-calendar-alt fa-4x"></i>
              <h1>Live</h1>
            </div>
          </a>

          <a href="#!" onClick={(() => { setId(2); setTransition(!transition) })}>
            <div className="bubble-2">
              <i className="far fa-envelope fa-4x"></i>
              <h1>connectons</h1>
            </div>
          </a>

          {transition && id === 1 &&
            <div onClick={undoTransition} className="schedule">
              {/* <h2>Unfortunately for the moment all classes can only be given online</h2> */}

              <div className="classes">
                <div className="class">
                  <h3>Cours Gratuit</h3>
                  <h3>Tous Niveaux: 30 min Flow & Go!</h3>
                  <h3>Lundi 18h00 - 18h30</h3>
                  <Link to="/live">Allons-y</Link>
                </div>

                <div className="class">
                  <h3>Tous Niveaux: Vinyasa Caféine</h3>
                  <h3>Lundi 8h00-9h00</h3>
                  <a href="https://idolemyoga.podia.com/direct-1-lundi-08h00-tous-niveaux-yoga-vinyasa-cafeine-avec-claudia-offert-par-idolem-brossard" target="_blank" rel="noopener noreferrer">Allons-y</a>
                </div>

                <div className="class">
                  <h3>Tous Niveaux: Yoga flow & STRETCH </h3>
                  <h3>Mardi 8h00-9h00</h3>
                  <a href="https://idolemyoga.podia.com/direct-2-08h00-tous-niveaux-yoga-flow-stretch-avec-tanya-offert-par-idolem-brossard" target="_blank" rel="noopener noreferrer">Allons-y</a>
                </div>

              </div>
              <div className="idolem-link">
                <h3><a href="https://idolemyoga.podia.com/abonnements" target="_blank" rel="noopener noreferrer">Pour avoir un essai gratiut cliquez ici</a></h3>
              </div>
            </div>
          }

          {transition && id === 2 &&

            <div className="contact" onClick={undoTransition}>
              <div id="contact-form">
                <h2>yogialunette@gmail.com</h2>

                <form name="contact" method="post" data-netlify="true">
                  <input type="hidden" name="form-name" value="contact" />
                  <div onClick={(e) => e.preventDefault()} className="text-fields">
                    <input type="text" name="name" className="text-input name-input" placeholder="Nom" />
                  </div>
                  <div onClick={(e) => e.preventDefault()} className="text-fields">
                    <input type="email" name="email" className="text-input email-input" placeholder="Votre adresse email" />
                  </div>
                  <div onClick={(e) => e.preventDefault()} className="text-fields">
                    <input type="text" name="subject" className="text-input subject-input" placeholder="
En quelques mots" />
                  </div>
                  <div onClick={(e) => e.preventDefault()} className="text-fields">
                    <textarea name="message" className="text-input message-input" placeholder="
Laisser un message"></textarea>
                  </div>
                  <button className="message-button" type="submit">
                    envoyer</button>
                </form>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Contact;

