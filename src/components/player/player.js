import React from 'react';
import Range from '../range';
import PlayControl from '../play-control';
import SkipControl from '../skip-control';
import './player.css';

const Player = () => {
  return (
    <div className="player">
      <img
        className="player__cover"
        src="https://is1-ssl.mzstatic.com/image/thumb/Podcasts124/v4/b6/8e/2e/b68e2ef1-3978-bcdb-8dc3-5d4e73022f0d/mza_13030192489676996426.jpg/600x600bb.jpg"
        width="72"
        height="72"
        alt=""
      />
      <div className="player__play-controls">
        <SkipControl type="prev" />
        <PlayControl type="play" theme="fill" />
        <SkipControl type="next" />
      </div>
      <div className="player__controls">
        <div className="player__info">
          <h3 className="player__title">Нейрорисунок на телевизор</h3>
          <p className="player__author">Игорь и Дима</p>
        </div>
        <div className="player__progress">
          <span className="player__time">38:03</span>
          <Range
            min="0"
            max="32"
            value="3"
            onChange={() => {}}
          />
          <span className="player__time">-1:08:30</span>
        </div>
      </div>
      <div className="player__volume">
        <Range
          min="0"
          max="10"
          value="3"
          onChange={() => {}}
        />
      </div>
    </div>
  );
};

export default Player;
