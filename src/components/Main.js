import React from 'react';
import './Main.scss';
import intro from '../img/YogiALunetteLanding.mp4';


const Main = () => {
  return (
    <div id="landing">
      <video className="landing-video" autoPlay muted loop>
        <source src={intro} type="video/mp4" />
      </video>
      <h1>Yogi A Lunette</h1>

    </div>



  )
}

export default Main;