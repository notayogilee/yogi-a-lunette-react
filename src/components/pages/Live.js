import React from 'react';
import { TwitchPlayer } from 'react-twitch-embed';
import CountdownTimer from '../utils/CountdownTimer';
import './Live.scss';

export default function Live() {
  return (
    <div className="live-container">

      <TwitchPlayer
        channel="yogialunette"
        id="yogialunette"
        height="60%"
        width="60%"

      />
      <h1><CountdownTimer /></h1>

    </div>
  )
}
