import React, { useEffect, useState } from 'react';
import './Moon.scss';
import axios from 'axios';
import fullMoon from '../../img/fullMoon.png';
import waxingCrescent from '../../img/waxingCrescent.png';
import firstQuarter from '../../img/firstQuarter.png';
import waxingGibbous from '../../img/waxingGibbous.png';
import waningGibbous from '../../img/waningGibbous.png';
import waningCrescent from '../../img/waningCrescent.png';
import lastQuarter from '../../img/lastQuarter.png';

let weatherAPI = process.env.REACT_APP_WEATHER_API_KEY;

// if (process.env.NODE_ENV !== 'production') {
//   weatherAPI = process.env.REACT_APP_WEATHER_API_KEY;
// } else {
//   weatherAPI = WEATHER_API_KEY;
// }



const Moon = () => {

  console.log(weatherAPI)
  //0 – new moon
  //0-0.25 – waxing crescent
  //0.25 – first quarter
  //0.25-0.5 – waxing gibbous
  //0.5 – full moon
  //0.5-0.75 – waning gibbous
  //0.75 – last quarter
  //0.75 -1 – waning crescent

  // res.data.locations.Montreal.currentConditions.moonphase

  const [moonPhase, setMoonPhase] = useState(0)

  useEffect(() => {
    const res = axios.get(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/weatherdata/forecast?locations=Montreal&aggregateHours=24&includeAstronomy=true&unitGroup=metric&shortColumnNames=false&contentType=json&key=${weatherAPI}`)
      .then(res => {
        console.log(res.data)
        setMoonPhase(res.data.locations.Montreal.currentConditions.moonphase);
      })
      .catch((err) => console.log(err))
  }, []);

  console.log(moonPhase)

  return (
    <div className="container">
      {moonPhase === 0 &&
        <div className="moon-phase">
          <img src="" alt="new moon" />
          <h1>New Moon</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim labore et ipsum facilis ab perferendis quia rerum dolor impedit asperiores velit provident officiis, at nostrum cum expedita eos? Eaque possimus quia ab dignissimos suscipit, quos fugit dolorem placeat optio distinctio.</p>
        </div>
      }
      {moonPhase > 0 && moonPhase < 0.25 &&
        <div className="moon-phase">
          <img src={waxingCrescent} alt="waxing crecent" />
          <h1>Waxing Crescent</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim labore et ipsum facilis ab perferendis quia rerum dolor impedit asperiores velit provident officiis, at nostrum cum expedita eos? Eaque possimus quia ab dignissimos suscipit, quos fugit dolorem placeat optio distinctio.</p>
        </div>
      }
      {moonPhase === 0.25 &&
        <div className="moon-phase">
          <img src={firstQuarter} alt="first quarter" />
          <h1>First Quarter</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim labore et ipsum facilis ab perferendis quia rerum dolor impedit asperiores velit provident officiis, at nostrum cum expedita eos? Eaque possimus quia ab dignissimos suscipit, quos fugit dolorem placeat optio distinctio.</p>
        </div>
      }
      {moonPhase > 0.25 && moonPhase < 0.5 &&
        <div className="moon-phase">
          <img src={waxingGibbous} alt="waxing gibbous" />
          <h1>Waxing Gibbous</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim labore et ipsum facilis ab perferendis quia rerum dolor impedit asperiores velit provident officiis, at nostrum cum expedita eos? Eaque possimus quia ab dignissimos suscipit, quos fugit dolorem placeat optio distinctio.</p>
        </div>
      }
      {moonPhase === 0.5 &&
        <div className="moon-phase">
          <img src={fullMoon} alt="full moon" />
          <h1>Full Moon</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora consectetur temporibus laborum impedit, sunt fugiat corporis, vel, quis debitis cupiditate eos perspiciatis quia dolor. Debitis, laudantium! Mollitia inventore non aperiam! Unde ab id natus porro nulla error impedit facilis dolorem quasi non, debitis mollitia pariatur excepturi, obcaecati architecto tenetur eum culpa. Saepe sit ipsam mollitia iste doloremque. Nobis, commodi! Asperiores ipsum, non eos voluptate, adipisci porro fuga cumque veritatis laudantium molestias excepturi! Doloribus, eaque corporis. Nam quod impedit quaerat tenetur, vero magnam, error ipsam aliquid nemo itaque excepturi repellendus fuga corrupti praesentium ducimus optio neque eveniet atque, nesciunt cumque! Mollitia.</p>
        </div>
      }
      {moonPhase > 0.5 && moonPhase < 0.75 &&
        <div className="moon-phase">
          <img src={waningGibbous} alt="waning gibbous" />
          <h1>Waning Gibbous</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim labore et ipsum facilis ab perferendis quia rerum dolor impedit asperiores velit provident officiis, at nostrum cum expedita eos? Eaque possimus quia ab dignissimos suscipit, quos fugit dolorem placeat optio distinctio.</p>
        </div>
      }
      {moonPhase === 0.75 &&
        <div className="moon-phase">
          <img src={lastQuarter} alt="last quarter" />
          <h1>Last Quarter</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Et fugit sapiente eos consectetur! Dolores dolor molestiae eum facilis rerum. Accusantium dicta, delectus harum ex sequi voluptatum blanditiis asperiores rem nemo quisquam assumenda eaque incidunt repellat? Sapiente dolore aliquid ex fugiat saepe consectetur sed architecto eligendi illo aperiam, blanditiis, optio recusandae?</p>
        </div>
      }
      {moonPhase > 0.75 && moonPhase < 1 &&
        <div className="moon-phase">
          <img src={waningCrescent} alt="waning crescent" />
          <h1>Waning Crescent</h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque natus beatae rem voluptatibus sunt ducimus officia saepe reiciendis doloremque repellendus. Numquam distinctio ipsum pariatur est magnam nisi beatae itaque accusantium?</p>
        </div>
      }
    </div>
  )
};

export default Moon;
