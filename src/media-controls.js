import React from 'react';
import { Button } from 'nes-react'

export default function MediaControls(props) {
  if (!props.episode) {
    return null
  }

  return (
    <div className="media-controls">
      <div className="buttons">
        <Button onClick={props.seekBackward}>Back</Button>
        <Button primary onClick={props.togglePlay}>
          {props.isPlaying ? 'Pause' : 'Play'}
        </Button>
        <Button onClick={props.seekForward}>Forward</Button>
      </div>
    </div>
  )
}
