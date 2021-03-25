import React from 'react';
import './episode-notes.css';

const EpisodeNotes = ({ description }) => {
  return (
    <pre
      className="episode-notes"
      dangerouslySetInnerHTML={{__html: description}}
    />
  );
};

export default EpisodeNotes;
