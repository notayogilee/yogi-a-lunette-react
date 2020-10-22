import React, { useEffect, useState, useRef } from 'react';

export default function Timer() {


  const [timerDays, setTimerDays] = useState('');
  const [timerHours, setTimerHours] = useState('');
  const [timerMinutes, setTimerMinutes] = useState('');
  const [timerSeconds, setTimerSeconds] = useState('');

  let interval = useRef();
  const [showTimer, setShowTimer] = useState(true);

  const startTimer = () => {
    const countdownDate = new Date('October 26, 2020 18:00:00').getTime();

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
        `Prochain cours en direct dans ${days} ${hours} ${minutes} ${seconds}`
      }

      {!showTimer &&
        'Namaste!'
      }

    </div>
  )
}
