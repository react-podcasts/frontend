import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { playerPlayControl } from '../../actions/player';
import PlayControl from '../play-control';

const PlayControlContainer = ({ selectedEpisodeData, theme }) => {
  const dispatch = useDispatch();
  const playing = useSelector(state => state.player.playing);
  const episodeId = useSelector(state => state.player.episodeId);
  const history = useSelector(state => state.listeningHistory);
  const { episodeId: selectedEpisodeId, duration } = selectedEpisodeData;
  const hasInHistory = history.find(e => e.episodeId === selectedEpisodeId);
  const currentTime = hasInHistory ? hasInHistory.currentTime : 0;
  const percent = currentTime / duration * 100 || 0;

  return (
    <PlayControl
      type={playing && episodeId === selectedEpisodeId ? 'pause' : 'play'}
      theme={theme}
      percent={percent}
      onClick={() => dispatch(playerPlayControl(selectedEpisodeData))}
    />
  );
};

export default PlayControlContainer;
