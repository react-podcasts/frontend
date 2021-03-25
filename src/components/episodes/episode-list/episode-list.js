import React from 'react';
import './episode-list.css';

export const EpisodeList = ({ children }) => (
  <ul className="episode-list">{children}</ul>
);

export const EpisodeListItem = ({ children }) => (
  <li className="episode-list__item">{children}</li>
);
