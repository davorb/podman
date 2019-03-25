import React from 'react';
import Select from 'react-select';
import nesTheme from 'react-select-nes-css-theme';

import './episodes.css';

const episodeOptions = (episodes) => {
  return episodes.map(episode => {
    return {
      value: episode,
      label: episode.name
    }
  })
}

export default function Episodes(props) {
  return (
    <Select
      styles={nesTheme}
      onChange={props.setCurrentEpisode}
      options={episodeOptions(props.episodes)}
      className="episodes-select" />
  )
}
