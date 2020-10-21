import React from 'react';
import { TwitchPlayer } from 'react-twitch-embed';
import CountdownTimer from '../utils/CountdownTimer';
import './Live.scss';

export default function Live() {
  return (
    <div className="live-container">

      <TwitchPlayer
        channel="notayogilee"
        id="notayogilee"
        height="60%"
        width="60%"
        hideControls="true"
      />
      <h1><CountdownTimer /></h1>

    </div>
  )
}
