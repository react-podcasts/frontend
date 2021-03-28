import React from 'react';
import PropTypes from 'prop-types';
import './episode-list.css';

export const EpisodeList = ({ children }) => (
  <ul className="episode-list">{children}</ul>
);

export const EpisodeListItem = ({ children }) => (
  <li className="episode-list__item">{children}</li>
);

EpisodeList.propTypes = {
  children: PropTypes.node.isRequired
};

EpisodeListItem.propTypes = {
  children: PropTypes.node.isRequired
};
