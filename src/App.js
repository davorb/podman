import React, { Component } from 'react'
import { Container } from "nes-react"
import EpisodesContainer from './episodes-container'

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="app">
        <Container title="podman">
          <EpisodesContainer />
        </Container>
      </div>
    );
  }
}

export default App
