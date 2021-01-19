import React, { useEffect, useState, useRef } from 'react';
import './CountdownTimer.scss';

export default function Timer() {

  const [copy, setCopy] = useState('Copy');

  const copyEmail = () => {
    let element = document.getElementById("email");
    let elementText = element.textContent;
    navigator.clipboard.writeText(elementText);
    setCopy("Copied!");
    setTimeout(() => setCopy("Copy"), 5000);
  }

  const [timerDays, setTimerDays] = useState('');
  const [timerHours, setTimerHours] = useState('');
  const [timerMinutes, setTimerMinutes] = useState('');
  const [timerSeconds, setTimerSeconds] = useState('');

  let interval = useRef();
  const [showTimer, setShowTimer] = useState(true);

  const startTimer = () => {
    const countdownDate = new Date('January 25, 2021 18:00:00').getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
      const minutes = Math.floor(distance % (1000 * 60 * 60) / (1000 * 60));
      const seconds = Math.floor(distance % (1000 * 60) / 1000);

      setShowTimer(true);
      if (distance < 0) {
        // stop our timer
        setShowTimer(false)
        clearInterval(interval.current);
      } else {
        //update timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
      }

    }, 1000)
  }

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    }
  }, []);

  const days = timerDays ? `${timerDays} jours` : '';
  const hours = timerHours ? `${timerHours} heures` : '';
  const minutes = timerMinutes ? `${timerMinutes} minutes` : '';
  const seconds = timerSeconds ? `${timerSeconds} seconds` : '';
  return (
    <div style={{ color: "#fff" }}>

      {showTimer &&
        <p>{`
 Prochain cours en direct dans ${days} ${hours} ${minutes} ${seconds}`}</p>
      }

      {!showTimer &&
        <div className="timer-message">
          <p>Si vous aimez notre travail et désirez contribuer, vous pouvez transférer vos dons précieux à </p>
          <div className="email-section">
            <strong id="email">yogialunette@gmail.com{' '}</strong>
            <button onClick={copyEmail} className="copy-button">
              <i className="fas fa-copy fa-lg">{" "}{copy}</i>
            </button>
          </div>
          <p>Votre générosité nous permet de vous offrir ces vidéos qui sont creés et produits avec tant d'amour!</p>
        </div>
      }
    </div>
  )
}
