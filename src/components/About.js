import React from 'react';
import yogiAbout from '../img/yogiAbout.jpg';
import './About.scss';

const About = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="picture">
          <img src={yogiAbout} alt="img" className="yogi-pic" />
        </div>
        <div className="story">
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis voluptas recusandae explicabo ratione reiciendis illo earum, aliquam id corrupti magnam non, molestiae quo ab laboriosam ullam ipsa? Modi, repudiandae. Corrupti tempore vel qui harum voluptates. Similique inventore perspiciatis facilis obcaecati suscipit. At illum nesciunt ad consequatur aspernatur. Et, amet. Eligendi nihil ullam quos nisi id hic molestias! Quibusdam, dignissimos! Quod fugit ut officiis dolorum possimus, incidunt sed assumenda, voluptatem autem nam reprehenderit consequuntur ea a ipsa fugiat, similique dolor quo? Sapiente vitae iusto in accusantium ipsam ullam sint, numquam ab inventore consectetur porro odit dolores recusandae architecto animi eos. Harum vero magnam eos unde minus corporis quia officiis consequuntur rerum velit, quo, aperiam delectus consequatur consectetur. Repudiandae, expedita repellendus veritatis facilis qui dolorem temporibus accusantium numquam. Dicta alias maxime, ullam saepe corporis quaerat eos? Aliquid voluptates numquam nemo maxime cupiditate aut. Reprehenderit tempora porro magni molestias nisi aut excepturi modi.</p>
        </div>
      </div>
    </section>
  )
}

export default About;