import React, { Component } from 'react'
import ReactPlayer from 'react-player'

import Episodes from './episodes'
import MediaControls from './media-controls'
import MarkerDisplay from './marker-display'

class EpisodesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      episodes: [],
      currentEpisode: {
        audio: null,
        markers: []
      },
      playing: false,
      episodePlayed: 0
    }
  }

  componentDidMount() {
    this.fetchEpisodes()
  }

  setCurrentEpisode = (episode) => {
    this.setState({ currentEpisode: episode.value})
  }

  seekForward = () => {
    this.player.seekTo(this.state.episodePlayed + 5)
  }

  seekBackward = () => {
    this.player.seekTo(this.state.episodePlayed - 5)
  }

  togglePlay = () => {
    this.setState({ playing: !this.state.playing })
  }

  fetchEpisodes = () => {
    const url = 'http://localhost:1337/episodes'

    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ episodes: data }))
      .catch(error => alert(`Unable to fetch episodes: ${error}`))
  }

  onProgress = (state) => {
    //console.log('progress', state)
    this.setState({ episodePlayed: state.playedSeconds })
  }

  ref = player => this.player = player

  render() {
    return (
      <div>
        <ReactPlayer
          className="player"
          url={`http://localhost:1337${this.state.currentEpisode.audio}`}
          playing={this.state.playing}
          onProgress={this.onProgress}
          ref={this.ref}
        />
        <Episodes
          episodes={this.state.episodes}
          setCurrentEpisode={this.setCurrentEpisode} />
        <MediaControls
          episode={this.state.currentEpisode}
          togglePlay={this.togglePlay}
          seekForward={this.seekForward}
          seekBackward={this.seekBackward}
          isPlaying={this.state.playing}
        />
        <MarkerDisplay
          episode={this.state.currentEpisode}
          episodePlayed={this.state.episodePlayed}
        />
      </div>
    )
  }
}

export default EpisodesContainer
