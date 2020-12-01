import React from 'react';
import { TwitchPlayer } from 'react-twitch-embed';
import CountdownTimer from '../utils/CountdownTimer';
import './Live.scss';

export default function Live({ history }) {
  return (
    <div className="live-container" onDoubleClick={() => history.push('/videos')}>

      <TwitchPlayer
        channel="yogialunette"
        id="yogialunette"
        height="60%"
        width="80%"
        hideControls={false}
      />
      <h1><CountdownTimer /></h1>

    </div>
  )
}
