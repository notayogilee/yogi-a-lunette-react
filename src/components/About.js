import React from 'react';
import yogiAbout from '../img/showcase.jpg';
import './About.scss';

const About = () => {
  return (
    <div className="container">
      <img src={yogiAbout} className="yogi-pic" alt="none" />
     
      <div className="text">
        <p>Claudia Viens pratique Asana-Yoga depuis 2006 et enseigne depuis 2017. Reconnue pour sa passion, sa clarté et sa créativité, son style d'enseignement est un mélange dynamique et stimulant d'inspiration, d'humour et de dur labeur. Maîtrise de la synthèse, sa capacité à récolter et à transmettre les contributions uniques de diverses méthodes de yoga est sans précédent. Claudia croit que la pratique du yoga peut aider n'importe qui à accéder à sa sagesse intérieure, à sa spiritualité authentique et à clarifier sa plus haute expression personnelle.
 
 Claudia s'inspire de nombreux maîtres enseignants descendants du Hatha Yoga, comme: Iyengar, Anusara, Ashtanga, Bikram et de la technologie Kundalini. Elle est professeure certifiée en Hatha-Vinyasa du Collège Sangha Yoga. Elle est aussi vloggeuse sur sa chaîne Youtube "Yogi-à-lunette". Créatrice de classes qui sortent de l'ordinaire, de tutoriels regorgeant de détails et d'ateliers surprenants dans l'intégration de  différentes pratiques,  Claudia vous fera vivre une expérience hors du commun à chaque rencontre. Depuis 2019,  elle s'est joint à la grande famille IDOLEM qui lui a ouvert sa porte et son cœur, permettant de transmettre, à cette communauté désireuse de co-créer, son amour du Yoga.  
  
 Claudia  réside dans le quartier St-Henri de Montréal avec son mari, sa sœur et  deux toutous gentils comme tout, Loky & Jasper. Ces grandes passions sont le yoga, la lecture, la cuisine et les aventures dans les friperies et les ventes de garage ! :)
 </p>
      </div>
    </div>
  )
}

export default About;