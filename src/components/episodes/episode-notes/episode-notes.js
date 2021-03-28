import React from 'react';
import PropTypes from 'prop-types';
import './episode-notes.css';

const EpisodeNotes = ({ description }) => {
  return (
    <pre
      className="episode-notes"
      dangerouslySetInnerHTML={{__html: description}}
    />
  );
};

EpisodeNotes.propTypes = {
  description: PropTypes.string.isRequired
};

export default EpisodeNotes;
