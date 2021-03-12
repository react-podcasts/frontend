import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playerPlayControl } from '../../actions/player';
import PlayControl from '../play-control';

const PlayControlContainer = ({ selectedEpisodeId, theme }) => {
  const dispatch = useDispatch();
  const { playing, episodeId } = useSelector(state => state.player);

  return (
    <PlayControl
      type={playing && episodeId === selectedEpisodeId ? 'pause' : 'play'}
      theme={theme}
      onClick={() => dispatch(playerPlayControl(selectedEpisodeId))}
    />
  );
};

export default PlayControlContainer;
