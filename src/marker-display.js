import React from 'react';
import { Container } from 'nes-react'

import './marker-display.css'

function calculateCurrentMarker(time, markers) {
  return markers.reduce((acc, marker) => {
    if (time >= marker.start && time <= marker.start + marker.duration) {
      return marker
    } else {
      return acc
    }
  }, null)
}

function AdMarker(props) {
  return <a href={props.marker.link} target="_blank" rel="noopener noreferrer">{props.marker.content}</a>
}

function ImageMarker(props) {
  return <img className="image-marker" alt="marker" src={`http://localhost:1337${props.marker.content}`} />
}

export default function MarkerDisplay(props) {
  if (!props.episode) {
    return null
  }

  const currentMarker = calculateCurrentMarker(props.episodePlayed, props.episode.markers)
  if (!currentMarker) {
    return null
  }

  let marker
  if (currentMarker.type === 'ad') {
    marker = <AdMarker marker={currentMarker} />
  } else if (currentMarker.type === 'image') {
    marker = <ImageMarker marker={currentMarker} />
  } else if (currentMarker.type === 'text') {
    marker = currentMarker.content
  }

  return (
    <div className="marker-display">
      <Container centered>{marker}</Container>
    </div>
  )
}
