import React from 'react';
import yogiAbout from '../img/showcase.jpg';
import './About.scss';

const About = () => {
  return (
    <div className="container">
      <img src={yogiAbout} className="yogi-pic" alt="none" />
      <div className="text">
        <h2>About Me</h2>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita aliquid nulla debitis commodi unde pariatur repellendus ipsam cum quas, possimus consequatur laudantium est suscipit consequuntur mollitia non deleniti hic corporis qui magnam? Praesentium repellat iste adipisci porro tempora magnam fugit illum tempore magni aliquam et, atque reprehenderit? Voluptate libero vel soluta numquam ipsa ducimus dolorum, quasi commodi, repudiandae aperiam, veritatis delectus unde quod eveniet blanditiis iusto et adipisci tempore rerum sit magni enim est. Reiciendis id nemo blanditiis deleniti expedita soluta! Placeat dolore id et expedita! Vitae sed soluta possimus nihil veritatis dicta sapiente, ducimus blanditiis quisquam alias porro odit.</p>
      </div>
    </div>
  )
}

export default About;