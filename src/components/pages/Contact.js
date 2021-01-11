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

                <div className="class">
                  <h3>Tous Niveaux: Chakras Flow</h3>
                  <h3>Jeudi 16h00 - 17h00</h3>
                  <a href="https://idolemyoga.podia.com/direct-4-jeudi-16h15-tous-niveaux-yoga-chakras-flow-avec-claudia-offert-par-idolem-blainville" target="_blank" rel="noopener noreferrer" >Allons-y</a>
                </div>
              </div>
              <div className="idolem-link">
                <h3><a href="https://idolemyoga.podia.com/abonnements" target="_blank" rel="noopener noreferrer">Pour avoir un essai gratiut cliquez ici</a></h3>
              </div>



              {/* <div className="location">
                  <h3><a href="https://www.google.com/maps/place/5840+Taschereau+Blvd,+Brossard,+QC+J4W+1M6/@45.4768478,-73.4692905,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc90573f84838c3:0xe0e26f62c9164785!8m2!3d45.4768478!4d-73.4671018" target="_blank" rel="noopener noreferrer">Idolem Brossard <i className="fas fa-map-marker-alt"></i></a></h3>
                  <div></div>
                </div>
                <h3>Intermediaire/Avanacé: Power Flow</h3>
                <h3>Mardi 18:30 - 19:30</h3>
                <br />
                <h3>Tous Niveaux: Yin Nidra</h3>
                <h3>Mardi 20:00-21:00</h3>
                <br />
                <h3>Tous Niveaux: Yoga Astanga Fusion</h3>
                <h3>Samedi 9:00-10:00</h3>
                <br />
                <h3>Débutant: Flow Énergétique</h3>
                <h3>Samedi 10:20-11:20</h3> */}
              {/* </div>

              <div className="classes"> */}
              {/* <div className="location">
                  <h3><a href="https://www.google.com/maps/place/Idolem+Hot+Yoga+Blainville/@45.6766731,-73.8863607,15z/data=!4m5!3m4!1s0x0:0xcea3f9762710b504!8m2!3d45.6766731!4d-73.8863607" target="_blank" rel="noopener noreferrer">Idolem Blainville <i className="fas fa-map-marker-alt"></i></a></h3>
                  <div></div>
                </div>
                <h3>Tous Niveaux: Asana/Pranayama</h3>
                <h3>Jeudi 15:00 - 16:00</h3>
                <br />
                <h3>Tous Niveaux: Chakra Flow</h3>
                <h3>Jeudi 16:15 - 17:30</h3>
                <br />
                <h3>Intermediaire/Avanacé: Astanga Fusion/Flow</h3>
                <h3>Jeudi 17:45 - 19:00</h3>
                <br />
                <h3>Tous Niveaux: Yin</h3>
                <h3>Jeudi 19:15 - 20:30</h3> */}

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

