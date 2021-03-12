import React from 'react';
import { Link } from 'react-router-dom';
import { secondsToString } from '../../utils/time';
import PlayControlContainer from '../play-control-container';
import './episodes-list.css';

const EpisodesList = ({ episodes }) => {
  return (
    <ul className="episodes-list">
      {
        episodes.map(({ id, title, published, duration }) => {
          return (
            <li key={id} className="episodes-list__item">
              <PlayControlContainer selectedEpisodeId={id} />
              <h2 className="episodes-list__title">
                <Link
                  className="episodes-list__link"
                  to={location => `${location.pathname}/${id}`}
                >{title}</Link>
              </h2>
              <span className="episodes-list__published">{published}</span>
              <span className="episodes-list__duration">{secondsToString(duration)}</span>
            </li>
          );
        })
      }
    </ul>
  );
};

export default EpisodesList;
