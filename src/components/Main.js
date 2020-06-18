import React from 'react';
import intro from '../img/intro.mp4';


const Main = () => {
  return (

    <video autoPlay muted loop
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
        left: "50%",
        top: "50%",
        objectFit: "cover",
        transform: "translate(-50%, -50%)",
        zIndex: "-1"
      }}
    >
      <source src={intro} type="video/mp4" />
    </video>

  )
}

export default Main;