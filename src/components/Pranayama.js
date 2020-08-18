import React, { Fragment, useState } from 'react';
import './Pranayama.scss';

const Pranayama = () => {

  // const container = document.getElementById('container');
  // let text = document.getElementById('text');

  const [text, setText] = useState('Breath In');
  const [containerState, setContainerState] = useState('grow');

  const totalTime = 7500;
  const breathTime = ((totalTime / 5) * 2);
  const holdTime = totalTime / 5;


  function breathAmimation() {
    setText('Breath In');
    setContainerState('grow');
    setTimeout(() => {
      setText('Hold');
      setContainerState('');

      setTimeout(() => {
        setText('Breath Out');
        setContainerState('shrink');
        // container.className = 'container shrink';
      }, holdTime)
    }, breathTime)
  }
  breathAmimation();

  setInterval(breathAmimation, totalTime)

  return (
    <Fragment>
      <div className="body">
        <h1>Pranayama</h1>

        <div className={containerState} id="container">
          <div className="circle"></div>
          <p id="text"></p>
          <div className="pointer-container">
            <span className="pointer"></span>
          </div>
          <div className="gradient-circle"></div>
        </div>
      </div>

    </Fragment>
  );
};

export default Pranayama;