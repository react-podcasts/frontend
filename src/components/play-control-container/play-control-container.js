import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playerPlayControl } from '../../actions/player';
import PlayControl from '../play-control';

const PlayControlContainer = ({ selectedEpisodeData, theme }) => {
  const dispatch = useDispatch();
  const { playing, episodeId } = useSelector(state => state.player);
  const { episodeId: selectedEpisodeId } = selectedEpisodeData;

  return (
    <PlayControl
      type={playing && episodeId === selectedEpisodeId ? 'pause' : 'play'}
      theme={theme}
      onClick={() => dispatch(playerPlayControl(selectedEpisodeData))}
    />
  );
};

export default PlayControlContainer;
