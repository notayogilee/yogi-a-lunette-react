import React, { Fragment, useState } from 'react';
import ReactPlayer from 'react-player';
import Button from './Button';

const Videos = () => {

  const [description, setDescription] = useState(false);
  const [id, setId] = useState(0);
  const [overlay, setOverlay] = useState("");

  return (

    <div id="video" className={overlay}>
      <div className="video-inner">
        <h3>On S'Inspire de la Pratique Ashtanga</h3>
        <ReactPlayer
          controls
          width="320"
          height="180"
          url="https://www.youtube.com/watch?v=i0uQQFj8as0&t=1s"
        />
        {description && id === 1 &&
          <Fragment>
            <div id="modal">
              <h3 className="modal-title">On S'Inspire de la Pratique Ashtanga</h3>
              <ReactPlayer
                controls
                width="320"
                height="180"
                url="https://www.youtube.com/watch?v=i0uQQFj8as0&t=1s"
              />
              <p className="modal-description">55 minutes a la sauce "ASHTANGA"
              Une pratique dynamique conçue pour réveiller le corps et l'esprit. Inspirer par la série première, nommée: Yoga Chikitsa ( qui veut dire "yoga pour la santé ou yoga thérapie). Nous allons effleurer la série qui, traditionnelement prends entre 90 et 120 minutes a complêter. Je vous donnes des trucs, des variations et de l'humour pour y arrvier!! ;)</p>
              <Button className="close-overlay" onClick={() => { setOverlay(""); setDescription(false) }}><i class="fas fa-minus"></i></Button>
            </div>
          </Fragment>
        }
        {!description &&
          <Button onClick={() => { setId(1); setDescription(true); setOverlay("overlay") }} ><i class="fas fa-plus 1"></i></Button>
        }
      </div>
      <div className="video-inner">
        <h3>Apana Vayu</h3>
        <ReactPlayer
          controls
          width="320"
          height="180"
          url="https://www.youtube.com/watch?v=lbN1JBbbNKs&t=1s"
        />
        {description && id === 2 &&
          <Fragment>
            <div id="modal">
              <h3 className="modal-title">Apana Vayu</h3>
              <ReactPlayer
                controls
                width="320"
                height="180"
                url="https://www.youtube.com/watch?v=lbN1JBbbNKs&t=1s"
              />
              <p></p>
              <Button onClick={() => { setOverlay(""); setDescription(false) }}><i class="fas fa-minus"></i></Button>
            </div>
          </Fragment>
        }
        {!description &&
          <Button onClick={() => { setId(2); setDescription(true); setOverlay("overlay") }}><i class="fas fa-plus"></i></Button>
        }
      </div>
      <div className="video-inner">
        <h3>5 Minutes Pour Ouvrir le Haut du Corps et Respirer a Fond</h3>
        <ReactPlayer
          controls
          width="320"
          height="180"
          url="https://www.youtube.com/watch?v=07A2nRwXQsk&t=1s"
        />

        {description && id === 3 &&
          <Fragment>
            <div id="modal">
              <h3 className="modal-title">5 Minutes Pour Ouvrir le Haut du Corps et Respirer a Fond</h3>
              <ReactPlayer
                controls
                width="320"
                height="180"
                url="https://www.youtube.com/watch?v=07A2nRwXQsk&t=1s"
              />
              <p>La santé de nos poumons est vraiment importante. Avec ce qui se passe mondialement, nous devons, plus que jamais, apporter plus d'attention a notre santé globale. Notre système immunitaire dois être fort et nos très puissants arbres pulmonaires doivent être entrainés afin d'absorber le plus d'oxygène possible. Plus la respiration est profonde, plus notre vie l'est aussi!
              Les bénifices de la respiration et de l'ouverture du haut du corps par cette petite pratique vont te donner comme un coup de fouet de vitalité:
              -Un apport accru d'oxygène dans le sang
              -Détoxification du corps
              -Diminu le stress et l'anxiété
              -Renforce  le système immunitaire
              -Des pensées plus claires
              -Un esprit calme</p>
              <Button onClick={() => { setOverlay(""); setDescription(false) }}><i class="fas fa-minus"></i></Button>
            </div>
          </Fragment>
        }
        {!description &&
          <Button onClick={() => { setId(3); setDescription(true); setOverlay("overlay") }}><i class="fas fa-plus"></i></Button>
        }
      </div>
      <div className="video-inner">
        <h3>Supta Gomukhasana</h3>
        <ReactPlayer
          controls
          width="320"
          height="180"
          url="https://www.youtube.com/watch?v=mUZZuI6kR_8&t=1s"
        />
        {description && id === 4 &&
          <Fragment>
            <div id="modal">
              <h3 className="modal-title">Supta Gomukhasana</h3>
              <ReactPlayer
                controls
                width="320"
                height="180"
                url="https://www.youtube.com/watch?v=mUZZuI6kR_8&t=1s"
              />
              <p>Traditionellement ,supta gomukhasana est pratiquée pour ettirer les hanches.  Mais dans cette variation de la posture allongée de la tête de vache on utilise la force et l'amplitude de mouvement du bas du corps plutôt que d'utiliser les mains comme des leviers externes afin de maintenir le bassin et les fessiers au sol et donc garder une belle intégrité  et une magnifique ouverture dans le bas du dos.
              De plus, on engage la musculature  des abdominaux profonds qui sont très importants dans la stabilisation du bassin et d'une bonne posture.

              Excellent pour:
              -les douleurs lombaires
              -après une pratique intense de torsion. EX: yoga, golf, tennis, sports de combat, même les activités qui demande de courir ou sauter.

              A pratiquer en tout temps.</p>
              <Button onClick={() => { setOverlay(""); setDescription(false) }}><i class="fas fa-minus"></i></Button>
            </div>
          </Fragment>
        }
        {!description &&
          <Button onClick={() => { setId(4); setDescription(true); setOverlay("overlay") }}><i class="fas fa-plus"></i></Button>
        }
      </div>
      <div className="video-inner">
        <h3>45 min Chair Yoga in English</h3>
        <ReactPlayer
          controls
          width="320"
          height="180"
          url="https://www.youtube.com/watch?v=9_mkUmRNTnI&t=1s"
        />
        {description && id === 5 &&
          <Fragment>
            <div id="modal">
              <h3 className="modal-title">45 min Chair Yoga in English</h3>
              <ReactPlayer
                controls
                width="320"
                height="180"
                url="https://www.youtube.com/watch?v=9_mkUmRNTnI&t=1s"
              />
              <p>This video was made for an amazing group of residents that I am teaching. I haven't been able to see them for a little while since the quarantine.
              Of course this video is made for anybody with reduced mobility.
              Hope you enjoy! :)

              Good day to all  of the Chartwell Le Wellesley's  residents.
              I am so happy to give you this 45 min. yoga class on chair.
              A bit of every to get you going!
              In these times of containment,
              let's open our body, our heart and our soul!!
          :)</p>
              <Button onClick={() => { setOverlay(""); setDescription(false) }}><i class="fas fa-minus"></i></Button>
            </div>
          </Fragment>
        }
        {!description &&
          <Button onClick={() => { setId(5); setDescription(true); setOverlay("overlay") }}><i class="fas fa-plus"></i></Button>
        }
      </div>
      <div className="video-inner">
        <h3>Tutoriel & Pratique Pour la Nuque, les Épaules & les Bras</h3>
        <ReactPlayer
          controls
          width="320"
          height="180"
          url="https://www.youtube.com/watch?v=xOvXcCF12c8&t=1s"
        />
        {description && id === 6 &&
          <Fragment>
            <div id="modal">
              <h3 className="modal-title">Tutoriel & Pratique Pour la Nuque, les Épaules & les Bras</h3>
              <ReactPlayer
                controls
                width="320"
                height="180"
                url="https://www.youtube.com/watch?v=xOvXcCF12c8&t=1s"
              />

              <p>Moins d'une demi heure afin d'amener conscience et détente au niveau du cou et des épaules. Je te donnes des petits trucs d'allignements que j'aime beaucoup. On renforce certaine zones afin de ressentir encore plus la détente par la suite. Idéal si tu expériments de la douleur ou des tensions a ces endroits constamment sollicités et très souvent désalignés! :)</p>
              <Button onClick={() => { setOverlay(""); setDescription(false) }}><i class="fas fa-minus"></i></Button>
            </div>
          </Fragment>
        }
        {!description &&
          <Button onClick={() => { setId(6); setDescription(true); setOverlay("overlay") }}><i class="fas fa-plus"></i></Button>
        }
      </div>
      <div className="video-inner">
        <h3>Nadi Shodhana</h3>
        <ReactPlayer
          controls
          width="320"
          height="180"
          url="https://www.youtube.com/watch?v=dJUl66dCMc4&t=1s"
        />
        {description && id === 7 &&
          <Fragment>
            <div id="modal">
              <h3 className="modal-title">Nadi Shodhana</h3>
              <ReactPlayer
                controls
                width="320"
                height="180"
                url="https://www.youtube.com/watch?v=dJUl66dCMc4&t=1s"
              />

              <p>En c'est temps ou l'on se sent déséquilibrer, ou l'on pert un peu le contrôle, ou tout va trop vite et bien la respiration Nadi Shodhana peut nous aider a équilibrer notre corps et notre esprit. Une pratique respiratoire efficace  qui  oxigène les 2 hémisphères de ton cerveau et  ainsi,  apporter de nombreux bienfaits :
              -apaise et cré un affet de calme, d'équanimité.
              -augmente la concentration et nous rend plus attentif.
              -donne vitalité, soutien le systéme immunitaire et aide a la digestion.
              Au moment ou on effectu la rétention de souffle elle pourrait occasionner étourdissement, pression dans la tête et bouffée chaleur. Cela est un signe que vous devez arrêter . Lorsque l'on débute cette pratique, on peut exécuter 2-3 secondes de rétention pas plus. Avec le temps, le corps s'adaptera.
        Bonne pratique!</p>
              <Button onClick={() => { setOverlay(""); setDescription(false) }}><i class="fas fa-minus"></i></Button>
            </div>
          </Fragment>
        }
        {!description &&
          <Button onClick={() => { setId(7); setDescription(true); setOverlay("overlay") }}><i class="fas fa-plus"></i></Button>
        }
      </div>
      <div className="video-inner">
        <h3>Short & Sweet</h3>
        <ReactPlayer
          controls
          width="320"
          height="180"
          url="https://www.youtube.com/watch?v=DtiRKlvL7lM&t=1s"
        />
        {description && id === 8 &&
          <Fragment>
            <div id="modal">
              <h3 className="modal-title">Short & Sweet</h3>
              <ReactPlayer
                controls
                width="320"
                height="180"
                url="https://www.youtube.com/watch?v=DtiRKlvL7lM&t=1s"
              />

              <p>activer le corps en entier quand on a moins d'une demi-heure, est-ce que ca se peut???
              Ben Kin!! ;)
              bonne pratique!
              ps: c'est un niveau avancé pour des yogis aguéris.
              si tu as aimé la musique en arrière-plan, voici la liste 'Spotify' que j'ai utilisée:
              https://open.spotify.com/playlist/1dS...
        Tu peux écouter plusieurs autres 'playlists' que j'ai aussi créée.</p>
              <Button onClick={() => { setOverlay(""); setDescription(false) }}><i class="fas fa-minus"></i></Button>
            </div>
          </Fragment>
        }
        {!description &&
          <Button onClick={() => { setId(8); setDescription(true); setOverlay("overlay") }}><i class="fas fa-plus"></i></Button>
        }
      </div>
      <div className="video-inner">
        <h3>Le Mantra "ÔM"</h3>
        <ReactPlayer
          controls
          width="320"
          height="180"
          url="https://www.youtube.com/watch?v=SqHN976Rdr4&t=1s"
        />
        {description && id === 9 &&
          <Fragment>
            <div id="modal">
              <h3 className="modal-title">Le Mantra "ÔM"</h3>
              <ReactPlayer
                controls
                width="320"
                height="180"
                url="https://www.youtube.com/watch?v=SqHN976Rdr4&t=1s"
              />

              <p>Parfois la nature nous inspire et c'est en étant dans cette forêt magnifique que le mantra  "¨ÔM"  s'est mis a résonner.</p>
              <Button onClick={() => { setOverlay(""); setDescription(false) }}><i class="fas fa-minus"></i></Button>
            </div>
          </Fragment>
        }
        {!description &&
          <Button onClick={() => { setId(9); setDescription(true); setOverlay("overlay") }}><i class="fas fa-plus"></i></Button>
        }
      </div>
      <div className="video-inner">
        <h3>Connexion Ciel & Terre</h3>
        <ReactPlayer
          controls
          width="320"
          height="180"
          url="https://www.youtube.com/watch?v=wQRD9jwbpgM&t=1s"
        />
        {description && id === 10 &&
          <Fragment>
            <div id="modal">
              <h3 className="modal-title">Connexion Ciel & Terre</h3>
              <ReactPlayer
                controls
                width="320"
                height="180"
                url="https://www.youtube.com/watch?v=wQRD9jwbpgM&t=1s"
              />

              <p>Un exercice  doux qui te permets de prendre sonscience de ton lien inconditionnel avec l'Énergie Téllurique et Céleste.  En respirant profondemment dans cette petite pratique simple, tu oxygènes  et bouges chaque recoin de ton corps avec grande attention. Tu deviens plus calme, centré et donc, réceptif a ce que le vie a de merveilleux a t'offrir!
              Une méditation en mouvement qui se fait partout; au boulot, a la maison, au parc et même avant d'aller au lit!
              Ce mouvement fait partie  de la pratique des gestes conscients Toltèques. Pour en savoir plus a se sejut je vous invite a voir ce reportage sur Youtube: https://www.youtube.com/watch?v=e030W...
              Ainsi que de vous renseigner sur Paul Degryse,
              auteur de plusieurs ouvrages sur se sujet très interessant.
        Bonne pratique :)</p>
              <Button onClick={() => { setOverlay(""); setDescription(false) }}><i class="fas fa-minus"></i></Button>
            </div>
          </Fragment>
        }
        {!description &&
          <Button onClick={() => { setId(10); setDescription(true); setOverlay("overlay") }}><i class="fas fa-plus"></i></Button>
        }
      </div>
      <div className="video-inner">
        <h3>Pour les Techniciens(nes) en Pharmacie</h3>
        <ReactPlayer
          controls
          width="320"
          height="180"
          url="https://www.youtube.com/watch?v=o1YWlPm13_w&t=1s"
        />
        {description && id === 11 &&
          <Fragment>
            <div id="modal">
              <h3 className="modal-title">Pour les Techniciens(nes) en Pharmacie</h3>
              <ReactPlayer
                controls
                width="320"
                height="180"
                url="https://www.youtube.com/watch?v=o1YWlPm13_w&t=1s"
              />

              <p>Une vingtaine de minutes pour vous donner des exercices et des étirements afin que vous passiez une journée au boulot moins douloureuse!
              Très simple, ils peuvent être exécutés n'importe où, n'importe quand!
        Essayez, pratiquez souvent et partagez abondamment!! :)</p>
              <Button onClick={() => { setOverlay(""); setDescription(false) }}><i class="fas fa-minus"></i></Button>
            </div>
          </Fragment>
        }
        {!description &&
          <Button onClick={() => { setId(11); setDescription(true); setOverlay("overlay") }}><i class="fas fa-plus"></i></Button>
        }
      </div>
      <div className="video-inner">
        <h3>Virabhadrasana 1</h3>
        <ReactPlayer
          controls
          width="320"
          height="180"
          url="https://www.youtube.com/watch?v=VW5ZZsixu5c&t=1s"
        />
        {description && id === 12 &&
          <Fragment>
            <div id="modal">
              <h3 className="modal-title">Virabhadrasana 1</h3>
              <ReactPlayer
                controls
                width="320"
                height="180"
                url="https://www.youtube.com/watch?v=VW5ZZsixu5c&t=1s"
              />

              <p>Le guerrier 1 est pratiqué ici avec détails.
              Je te donnes une variante  version "lunge" d'ou tu pourras parfaire ta technique et ainsi prendre position dans
              virabhadrasana 1.
              Y a toujours moyen  de la pratiquer près d'un mur pour plus de support.
              Amuses-toi !
        Namaste!!</p>
              <Button onClick={() => { setOverlay(""); setDescription(false) }}><i class="fas fa-minus"></i></Button>
            </div>
          </Fragment>
        }
        {!description &&
          <Button onClick={() => { setId(12); setDescription(true); setOverlay("overlay") }}><i class="fas fa-plus"></i></Button>
        }
      </div>
      <div className="video-inner">
        <h3>Dandasana "le Bâton"</h3>
        <ReactPlayer
          controls
          width="320"
          height="180"
          url="https://www.youtube.com/watch?v=u4s67UOnjhw&t=1s"
        />
        {description && id === 13 &&
          <Fragment>
            <div id="modal">
              <h3 className="modal-title">Dandasana "le Bâton"</h3>
              <ReactPlayer
                controls
                width="320"
                height="180"
                url="https://www.youtube.com/watch?v=u4s67UOnjhw&t=1s"
              />

              <p>C'est une posture de base qui est toutefois, difficile a exécuter correctement.
              Encore une fois les yogis a lunettes, je vous donnes tout mes trucs! Il y a tellement de bienfaits en plus a pratiquer cette posture:
              Elle étire les muscles du bas du dos et de l'arrière des jambes ainsi que des épaules et de la poitrine. Elle est recommandée aux personnes qui souffrent d'arthrite ou de rhumatisme des genoux et des chevilles.  Améliore les conditions respiratoires et procure de la stabilité au niveau émotionel.
              Elle améliore la posture du corps entier.

              Bonne pratique,
            Namaste</p>
              <Button onClick={() => { setOverlay(""); setDescription(false) }}><i class="fas fa-minus"></i></Button>
            </div>
          </Fragment>
        }
        {!description &&
          <Button onClick={() => { setId(13); setDescription(true); setOverlay("overlay") }}><i class="fas fa-plus"></i></Button>
        }
      </div>
      <div className="video-inner">
        <h3>Virasana "le Héro"</h3>
        <ReactPlayer
          controls
          width="320"
          height="180"
          url="https://www.youtube.com/watch?v=FUV5M6w3TCI&t=1s"
        />
        {description && id === 14 &&
          <Fragment>
            <div id="modal">
              <h3 className="modal-title">Virasana "le Héro"</h3>
              <ReactPlayer
                controls
                width="320"
                height="180"
                url="https://www.youtube.com/watch?v=FUV5M6w3TCI&t=1s"
              />

              <p>Le héro est  "LA" posture du temps des fêtes! Elle permet l'ouverture du coeur,  necessaire pour donner et recevoir tout l'amour  possible durant ces beaux moments.
              C'est aussi l'asana idéal que l'on a besoin de pratiquer  après avoir ingérer tout plein de bonne nourriture!

              Alors je te souhaite un merveilleux temps de réjouissance Yogi a Lunette!! On se revoit l'année prochaine!
            Namaste XX</p>
              <Button onClick={() => { setOverlay(""); setDescription(false) }}><i class="fas fa-minus"></i></Button>
            </div>
          </Fragment>
        }
        {!description &&
          <Button onClick={() => { setId(14); setDescription(true); setOverlay("overlay") }}><i class="fas fa-plus"></i></Button>
        }
      </div>
      <div className="video-inner">
        <h3>Tadasana "la Montagne"</h3>
        <ReactPlayer
          controls
          width="320"
          height="180"
          url="https://www.youtube.com/watch?v=G3XqhQ1PUm4&t=1s"
        />
        {description && id === 15 &&
          <Fragment>
            <div id="modal">
              <h3 className="modal-title">Tadasana "la Montagne"</h3>
              <ReactPlayer
                controls
                width="320"
                height="180"
                url="https://www.youtube.com/watch?v=G3XqhQ1PUm4&t=1s"
              />

              <p>*** Désolé pour le son, il y a eue un petit oubli de ma part a connecter mon micro! OUPS! ***   Namaste Yogi a Lunette. Aujourd'hui on travail dans les fondations de Tadasana, la posture de la montagne.  Faut surtout pas se laisser avoir  par son "look" simplet car cet asana renferme une TONNE de détails super interressants a  explorer.
              Je m'inspire de mon bagage personnel et aussi de trucs appris avec une maitre sensationnelle,  Merci  Christina Sell! Je te donnes ces infos plus bas.
              Comme d'habitude, je vais  t'inviter a explorer cette posture avec  curiosité et plus tu la pratique, plus tu pourras en sentir les subtilités.
        Bonne pratique! :)</p>
              <Button onClick={() => { setOverlay(""); setDescription(false) }}><i class="fas fa-minus"></i></Button>
            </div>
          </Fragment>
        }
        {!description &&
          <Button onClick={() => { setId(15); setDescription(true); setOverlay("overlay") }}><i class="fas fa-plus"></i></Button>
        }
      </div>
      <div className="video-inner">
        <h3>Je comprends</h3>
        <ReactPlayer
          controls
          width="320"
          height="180"
          url="https://www.youtube.com/watch?v=g9hKlwxHees&t=1s"
        />
        {description && id === 16 &&
          <Fragment>
            <div id="modal">
              <h3 className="modal-title">Je comprends</h3>
              <ReactPlayer
                controls
                width="320"
                height="180"
                url="https://www.youtube.com/watch?v=g9hKlwxHees&t=1s"
              />

              <p>Namaste les Yogis a lunette!!!
              Ca faisait TELLEMENT longtemps !!!!!
              J'ai pris du temps pour moi dernièrement mais vous m'avez beaucoup manqués!!  Alors voici une séquence inspirée d'une chanson magnifique de France D'Amour"Je comprends".  J'ai appris sur moi durant la dernière année et je me suis "RE"trouvée!! :)  Amour & Gratitude sont les deux mots qui m'inspirent et me guident  depuis. Conservez ces mots précieux  et répétez les a tout moments et voyez  la vie se transformer  comme par magie!
            Merci a vous tous d'être dans ma vie et je vous envoie plein d'amour! A bientôt  XX</p>
              <Button onClick={() => { setOverlay(""); setDescription(false) }}><i class="fas fa-minus"></i></Button>
            </div>
          </Fragment>
        }
        {!description &&
          <Button onClick={() => { setId(16); setDescription(true); setOverlay("overlay") }}><i class="fas fa-plus"></i></Button>
        }
      </div>
      <div className="video-inner">
        <h3>Thyroide et Thymus</h3>
        <ReactPlayer
          controls
          width="320"
          height="180"
          url="https://www.youtube.com/watch?v=sc78uAfwEPw&t=1s"
        />
        {description && id === 17 &&
          <Fragment>
            <div id="modal">
              <h3 className="modal-title">Thyroide et Thymus</h3>
              <ReactPlayer
                controls
                width="320"
                height="180"
                url="https://www.youtube.com/watch?v=sc78uAfwEPw&t=1s"
              />

              <p>Suite au vidéo que j'avais mise en ligne il y a 1mois déja : "De la tête jusqu' aux bouts des doigts". Je vous avais induit en erreurs mes très chèrs Yogi a Lunette en disant que les glandes thyroides ( Il n'y a en qu'une) étaient les gardiennes du système immunitaire, ce qui n'en n'est rien!! Grâce à une Yogi  ( Bonjour a toi Diane et merci encore!!  )  qui pratique sur ma chaine, j'ai pue corriger le tir en faisant cette vidéo.
              Je fais donc le point sur la différence entre la glande thyroide et le thymus. Je vous donne  une description de leurs fonctions et leurs liens au niveau énergétique! Évidemment,  on va intégrer tout ca ensemble avec  une activation du thymus et on pratique la posture Matsyasana (le poisson). Merci a vous tous de continuer a  me suivre dans cette aventure meme si je fais parfois des petits "faux pas"! ;)
        Bonne pratique & bonne semaine les yogis a lunette!</p>
              <Button onClick={() => { setOverlay(""); setDescription(false) }}><i class="fas fa-minus"></i></Button>
            </div>
          </Fragment>
        }
        {!description &&
          <Button onClick={() => { setId(17); setDescription(true); setOverlay("overlay") }}><i class="fas fa-plus"></i></Button>
        }
      </div>
      <div className="video-inner">
        <h3>Pratique Hatha : L'arbre. (Vrksasana)</h3>
        <ReactPlayer
          controls
          width="320"
          height="180"
          url="https://www.youtube.com/watch?v=wHQzm4QuXCs&t=1s"
        />
        {description && id === 18 &&
          <Fragment>
            <div id="modal">
              <h3 className="modal-title">Pratique Hatha : L'arbre. (Vrksasana)</h3>
              <ReactPlayer
                controls
                width="320"
                height="180"
                url="https://www.youtube.com/watch?v=wHQzm4QuXCs&t=1s"
              />

              <p>Une séquence de 30min en Hatha qui t'amène au coeur de toi-meme. C'est dans des moments de désiquilibres que l'on s'appercoit la force qui réside en nous. Comment abordes-tu les défis dans ton quotidien? La posture de l'arbre augmente le pouvoir de concentration et calme l'esprit.  Tu pourrais utiliser une chaise comme appui lors de l'exécution de la posture mais... essai plutôt de l'essayer sans!!! :)  Bonne séance  les yogis a lunette</p>
              <Button onClick={() => { setOverlay(""); setDescription(false) }}><i class="fas fa-minus"></i></Button>
            </div>
          </Fragment>
        }
        {!description &&
          <Button onClick={() => { setId(18); setDescription(true); setOverlay("overlay") }}><i class="fas fa-plus"></i></Button>
        }
      </div>
      <div className="video-inner">
        <h3>Bhujanagsana "le Cobra"</h3>
        <ReactPlayer
          controls
          width="320"
          height="180"
          url="https://www.youtube.com/watch?v=8Upvmgnmqrw&t=1s"
        />
        {description && id === 19 &&
          <Fragment>
            <div id="modal">
              <h3 className="modal-title">Bhujanagsana "le Cobra"</h3>
              <ReactPlayer
                controls
                width="320"
                height="180"
                url="https://www.youtube.com/watch?v=8Upvmgnmqrw&t=1s"
              />

              <p>Quand on exécute bhujangasana ( le cobra),  beaucoup d'éléments essentiels sont a considérer. Dans cette vidéo, je te transmet mes trucs pour comprendre  et approfondir  cette posture d'ouverture. On va, ensemble, décortiquer  cet asana en établissant des bases solides afin que tu rendes jaloux  le prochain cobra que tu  croiseras! ;)  N'oubli pas de respirer et de t'amuser.  Attention, si tu as des douleurs au niveau du dos, reste vigilant et respecte tes limites. Bonne pratique. </p>
              <Button onClick={() => { setOverlay(""); setDescription(false) }}><i class="fas fa-minus"></i></Button>
            </div>
          </Fragment>
        }
        {!description &&
          <Button onClick={() => { setId(19); setDescription(true); setOverlay("overlay") }}><i class="fas fa-plus"></i></Button>
        }
      </div>
      <div className="video-inner">
        <h3>Syndrôme du Piriforme</h3>
        <ReactPlayer
          controls
          width="320"
          height="180"
          url="https://www.youtube.com/watch?v=SMgyyNzs4yQ&t=1s"
        />
        {description && id === 20 &&
          <Fragment>
            <div id="modal">
              <h3 className="modal-title">Syndrôme du Piriforme</h3>
              <ReactPlayer
                controls
                width="320"
                height="180"
                url="https://www.youtube.com/watch?v=SMgyyNzs4yQ&t=1s"
              />

              <p>Le muscle piriforme va du sacrum à travers l’articulation sacro-iliaque jusqu’au sommet du fémur. Le nerf sciatique passe directement en dessous de ce muscle. Lorsque le muscle devient tendu, il peut causer une brève irritation du nerf. Un problème que l'on retrouve souvent chez les coureurs  ou chez les personnes qui ont ce trouble de façon chronique.  La douleur peut s’aggraver lorsque l'on demeure assis pendant une longue période (on est une société qui reste vraiment longtemps assise!). Donc il est important de bien étirer ce muscle et avec cette séquence, vous pourrez en etre soulagés très rapidement! Laissez-moi savoir ce que vous en pensés en me laissant vos commentaires.  Visitez-moi aussi sur ma page Facebook  "yogi a lunette" et je vous souhaite une bonne pratique ! Namaste</p>
              <Button onClick={() => { setOverlay(""); setDescription(false) }}><i class="fas fa-minus"></i></Button>
            </div>
          </Fragment>
        }
        {!description &&
          <Button onClick={() => { setId(20); setDescription(true); setOverlay("overlay") }}><i class="fas fa-plus"></i></Button>
        }
      </div>
      <div className="video-inner">
        <h3>De la Tête Jusqu' aux Bouts des Doigts</h3>
        <ReactPlayer
          controls
          width="320"
          height="180"
          url="https://www.youtube.com/watch?v=RQRFHB7J-DE&t=1s"
        />
        {description && id === 21 &&
          <Fragment>
            <div id="modal">
              <h3 className="modal-title">De la Tête Jusqu' aux Bouts des Doigts</h3>
              <ReactPlayer
                controls
                width="320"
                height="180"
                url="https://www.youtube.com/watch?v=RQRFHB7J-DE&t=1s"
              />

              <p>Une petite séquence qui va t'aider a détendre les muscles de ton  cou, du haut de ton dos et de tes épaules.  On finit ca avec un "ESPRESSO SHOT" pour tes bras, tes mains et tes doigts,  question de faire résonner le  PRANA dans tout le reste de ton corps. Ta ceinture scapulaire va être tellement contente! ;)</p>
              <Button onClick={() => { setOverlay(""); setDescription(false) }}><i class="fas fa-minus"></i></Button>
            </div>
          </Fragment>
        }
        {!description &&
          <Button onClick={() => { setId(21); setDescription(true); setOverlay("overlay") }}><i class="fas fa-plus"></i></Button>
        }
      </div>
      <div className="video-inner">
        <h3>La Respiration Diaphragmatique</h3>
        <ReactPlayer
          controls
          width="320"
          height="180"
          url="https://www.youtube.com/watch?v=Frj1Kz24cCE&t=1s"
        />
        {description && id === 22 &&
          <Fragment>
            <div id="modal">
              <h3 className="modal-title">La Respiration Diaphragmatique</h3>
              <ReactPlayer
                controls
                width="320"
                height="180"
                url="https://www.youtube.com/watch?v=Frj1Kz24cCE&t=1s"
              />

              <p>Une technique de respiration profonde qui va te permettre de  relaxer et de t'oxygéner. Tu exécutes un massage de tes organes et assouplis ton diaphragme, ce qui aura pour effet d' évacuer  les toxines physiques et mentales !! Calme et recentré, tu  te sentiras mon chèr yogi a lunette..  pratique cette technique  aussi souvent que tu le peux et tu verras ta respiration devenir naturellement plus longue et aisée.  N'hésites pas a me poser des questions ou meme a me donner tes commentaires et surtout, explores  cette respiration avec beaucoup d'amour et de douceur! Namaste</p>
              <Button onClick={() => { setOverlay(""); setDescription(false) }}><i class="fas fa-minus"></i></Button>
            </div>
          </Fragment>
        }
        {!description &&
          <Button onClick={() => { setId(22); setDescription(true); setOverlay("overlay") }}><i class="fas fa-plus"></i></Button>
        }
      </div>
      <div className="video-inner">
        <h3>Ashtanga Namaskara</h3>
        <ReactPlayer
          controls
          width="320"
          height="180"
          url="https://www.youtube.com/watch?v=VTJJ06pmTYE&t=1s"
        />
        {description && id === 23 &&
          <Fragment>
            <div id="modal">
              <h3 className="modal-title">Ashtanga Namaskara</h3>
              <ReactPlayer
                controls
                width="320"
                height="180"
                url="https://www.youtube.com/watch?v=VTJJ06pmTYE&t=1s"
              />

              <p>Un tutoriel rempli de petits trucs pour la posture Ashtanga Namaskara, la 6eme position dans la salutaion au soleil traditionnelle. Elle devient une étape importante  pour une  progression saine vers l'éventuel "Chaturanga"  lors de la salutation en Vinyasa. Tu auras besoin de 2 blocs et  d'une bonne dose de force!</p>
              <Button onClick={() => { setOverlay(""); setDescription(false) }}><i class="fas fa-minus"></i></Button>
            </div>
          </Fragment>
        }
        {!description &&
          <Button onClick={() => { setId(23); setDescription(true); setOverlay("overlay") }}><i class="fas fa-plus"></i></Button>
        }
      </div>
      <div className="video-inner">
        <h3>La Salutation au Soleil</h3>
        <ReactPlayer
          controls
          width="320"
          height="180"
          url="https://www.youtube.com/watch?v=aiGZmQHecrE&t=1s"
        />
        {description && id === 24 &&
          <Fragment>
            <div id="modal">
              <h3 className="modal-title">La Salutation au Soleil</h3>
              <ReactPlayer
                controls
                width="320"
                height="180"
                url="https://www.youtube.com/watch?v=aiGZmQHecrE&t=1s"
              />

              <p>Surya Namaskara est  l'enchaînement  de postures le plus connu et  pratiqué en Yoga.  Dynamique et fluide,  elle forme l'union harmonieuse de la respiration avec le  mouvement .  En la pratiquant à tout les jours,  elle deviendra comme une seconde nature. Tu développeras  force et souplesse autant dans ton corps que dans ton esprit..  j 'te l'garanti! ;) Bonne pratique .</p>
              <Button onClick={() => { setOverlay(""); setDescription(false) }}><i class="fas fa-minus"></i></Button>
            </div>
          </Fragment>
        }
        {!description &&
          <Button onClick={() => { setId(24); setDescription(true); setOverlay("overlay") }}><i class="fas fa-plus"></i></Button>
        }
      </div>
    </div>
  )
}

export default Videos;

// video preview ?