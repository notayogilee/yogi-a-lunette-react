import React, { Fragment } from 'react'

const Contact = () => {
  return (
    <Fragment>
      <div id="schedule-container">
        <div className="schedule">
          <div className="heading">
            <h1>Prendre de cours avec Yogi A Lunette</h1>
          </div>
          <div className="body">
            <table className="table">
              <tr>
                <th>Location</th>
                <th>Cours</th>
                <th>Jour</th>
                <th>Heure</th>
              </tr>
              <tr>
                <a href="https://www.google.com/maps/place/5840+Taschereau+Blvd,+Brossard,+QC+J4W+1M6/@45.4768478,-73.4692905,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc90573f84838c3:0xe0e26f62c9164785!8m2!3d45.4768478!4d-73.4671018" target="_blank" rel="noopener noreferrer"><th>Idolem Brossard <i class="fas fa-map-marker-alt"></i></th></a>
                <th>Intermediaire/Avanacé: Power Flow</th>
                <th>Mardi</th>
                <th>18:30-19:30</th>
              </tr>
              <tr>
                <a href="https://www.google.com/maps/place/5840+Taschereau+Blvd,+Brossard,+QC+J4W+1M6/@45.4768478,-73.4692905,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc90573f84838c3:0xe0e26f62c9164785!8m2!3d45.4768478!4d-73.4671018" target="_blank" rel="noopener noreferrer"><th>Idolem Brossard <i class="fas fa-map-marker-alt"></i></th></a>
                <th>Tous Niveaux: Yin Nidra</th>
                <th>Mardi</th>
                <th>20:00-21:00</th>
              </tr>
              <tr>
                <a href="https://www.google.com/maps/place/5840+Taschereau+Blvd,+Brossard,+QC+J4W+1M6/@45.4768478,-73.4692905,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc90573f84838c3:0xe0e26f62c9164785!8m2!3d45.4768478!4d-73.4671018" target="_blank" rel="noopener noreferrer"><th>Idolem Brossard <i class="fas fa-map-marker-alt"></i></th></a>
                <th>Tous Niveaux: Yoga Astanga Fusion</th>
                <th>Samedi</th>
                <th>9:00-10:00</th>
              </tr>
              <tr>
                <a href="https://www.google.com/maps/place/5840+Taschereau+Blvd,+Brossard,+QC+J4W+1M6/@45.4768478,-73.4692905,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc90573f84838c3:0xe0e26f62c9164785!8m2!3d45.4768478!4d-73.4671018" target="_blank" rel="noopener noreferrer"><th>Idolem Brossard <i class="fas fa-map-marker-alt"></i></th></a>
                <th>Débutant: Flow Énergétique</th>
                <th>Samedi</th>
                <th>10:00-11:00</th>
              </tr>
            </table>
          </div>
        </div>

        <div id="contact-form">
          <div className="heading">
            <h1>Envoi moi une message!</h1>
          </div>
          <form>
            <div className="text-fields">
              <input type="text" className="text-input name-input" placeholder="Name" />
            </div>
            <div className="text-fields">
              <input type="email" className="text-input email-input" placeholder="Your email address" />
            </div>
            <div className="text-fields">
              <input type="text" className="text-input subject-input" placeholder="Subject" />
            </div>
            <div className="text-fields">
              <textarea className="text-input message-input" placeholder="Enter Message"></textarea>
            </div>
            <button className="message-button" type="submit">SUBMIT</button>
          </form>
        </div>
      </div>
    </Fragment>
  )
}

export default Contact;

// with schedule