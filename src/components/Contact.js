import React, { Fragment } from 'react';
import './Contact.scss';

const Contact = () => {
  return (
    <Fragment>
      <div id="schedule-container">
        <div className="schedule">
          <div className="heading">
            <h1 className="large">Prendre de cours avec Yogi A Lunette</h1>
            <h1 className="small">Mon Horaire</h1>
          </div>
          <div className="body">
            <table className="table">
              <thead>
                <tr className="schedule-titles">
                  <th>Location</th>
                  <th>Cours</th>
                  <th>Jour</th>
                  <th>Heure</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <a href="https://www.google.com/maps/place/5840+Taschereau+Blvd,+Brossard,+QC+J4W+1M6/@45.4768478,-73.4692905,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc90573f84838c3:0xe0e26f62c9164785!8m2!3d45.4768478!4d-73.4671018" target="_blank" rel="noopener noreferrer"><th>Idolem Brossard <i className="fas fa-map-marker-alt"></i></th></a>
                  <th>Intermediaire/Avanacé: Power Flow</th>
                  <th>Mardi</th>
                  <th>18:30-19:30</th>
                </tr>
                <tr>
                  <a href="https://www.google.com/maps/place/5840+Taschereau+Blvd,+Brossard,+QC+J4W+1M6/@45.4768478,-73.4692905,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc90573f84838c3:0xe0e26f62c9164785!8m2!3d45.4768478!4d-73.4671018" target="_blank" rel="noopener noreferrer"><th>Idolem Brossard <i className="fas fa-map-marker-alt"></i></th></a>
                  <th>Tous Niveaux: Yin Nidra</th>
                  <th>Mardi</th>
                  <th>20:00-21:00</th>
                </tr>
                <tr>
                  <a href="https://www.google.com/maps/place/5840+Taschereau+Blvd,+Brossard,+QC+J4W+1M6/@45.4768478,-73.4692905,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc90573f84838c3:0xe0e26f62c9164785!8m2!3d45.4768478!4d-73.4671018" target="_blank" rel="noopener noreferrer"><th>Idolem Brossard <i className="fas fa-map-marker-alt"></i></th></a>
                  <th>Tous Niveaux: Yoga Astanga Fusion</th>
                  <th>Samedi</th>
                  <th>9:00-10:00</th>
                </tr>
                <tr>
                  <a href="https://www.google.com/maps/place/5840+Taschereau+Blvd,+Brossard,+QC+J4W+1M6/@45.4768478,-73.4692905,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc90573f84838c3:0xe0e26f62c9164785!8m2!3d45.4768478!4d-73.4671018" target="_blank" rel="noopener noreferrer"><th>Idolem Brossard <i className="fas fa-map-marker-alt"></i></th></a>
                  <th>Débutant: Flow Énergétique</th>
                  <th>Samedi</th>
                  <th>10:00-11:00</th>
                </tr>
              </tbody>
            </table>

            {/* responsive for cell */}
            <div className="table-small">
              <div className="info">
                <div className="class-1">
                  <div className="info-1">
                    <a href="https://www.google.com/maps/place/5840+Taschereau+Blvd,+Brossard,+QC+J4W+1M6/@45.4768478,-73.4692905,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc90573f84838c3:0xe0e26f62c9164785!8m2!3d45.4768478!4d-73.4671018" target="_blank" rel="noopener noreferrer"><i className="fas fa-map-marker-alt"></i></a>
                    <h3>Power Flow</h3>
                  </div>
                  <div className="info-2">
                    <h3>Mardi</h3>
                    <h3>18:30-19:30</h3>
                  </div>
                </div>
                <div className="class-2">
                  <div className="info-1">
                    <a href="https://www.google.com/maps/place/5840+Taschereau+Blvd,+Brossard,+QC+J4W+1M6/@45.4768478,-73.4692905,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc90573f84838c3:0xe0e26f62c9164785!8m2!3d45.4768478!4d-73.4671018" target="_blank" rel="noopener noreferrer"><i className="fas fa-map-marker-alt"></i></a>
                    <h3>Yin Nidra</h3>
                  </div>
                  <div className="info-2">
                    <h3>Mardi</h3>
                    <h3>20:00-21:00</h3>
                  </div>
                </div>
                <div className="class-3">
                  <div className="info-1">
                    <a href="https://www.google.com/maps/place/5840+Taschereau+Blvd,+Brossard,+QC+J4W+1M6/@45.4768478,-73.4692905,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc90573f84838c3:0xe0e26f62c9164785!8m2!3d45.4768478!4d-73.4671018" target="_blank" rel="noopener noreferrer"><i className="fas fa-map-marker-alt"></i></a>
                    <h3>Yoga Astanga Fusion</h3>
                  </div>
                  <div className="info-2">
                    <h3>Samedi</h3>
                    <h3>9:00-10:00</h3>
                  </div>
                </div>
                <div className="class-4">
                  <div className="info-1">
                    <a href="https://www.google.com/maps/place/5840+Taschereau+Blvd,+Brossard,+QC+J4W+1M6/@45.4768478,-73.4692905,17z/data=!3m1!4b1!4m5!3m4!1s0x4cc90573f84838c3:0xe0e26f62c9164785!8m2!3d45.4768478!4d-73.4671018" target="_blank" rel="noopener noreferrer"><i className="fas fa-map-marker-alt"></i></a>
                    <h3>Flow Énergétique</h3>
                  </div>
                  <div className="info-2">
                    <h3>Samedi</h3>
                    <h3>10:00-11:00</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="contact-form">
          <div className="heading">
            <h1>Message moi!</h1>
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