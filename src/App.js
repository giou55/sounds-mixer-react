import React, { Component } from 'react';
import './App.css';
import mainBirds from './assets/main-birds.mp4';
import mainRain from './assets/main-rain.mp4';
import mainWaves from './assets/main-waves.mp4';

import Sound from './Sound/Sound';

class App extends Component {

  state = {
    sounds: [
      { id: '11', title: 'bairds', mp3File: mainBirds, volume: '0', playStatus: 'false'},
      { id: '22', title: 'rain', mp3File: mainRain, volume: '0', playStatus: 'false'},
      { id: '33', title: 'waves', mp3File: mainWaves, volume: '0', playStatus: 'false'}
    ]
  };

  volumeChangeHandler = ( event, id) => {
    const soundIndex = this.state.sounds.findIndex(s => {
      return s.id === id;
    });

    const sound = {
      ...this.state.sounds[soundIndex]
    };

    sound.volume = event.target.value;

    const sounds = [...this.state.sounds];
    sounds[soundIndex] = sound;
    this.setState({sounds: sounds});
  }

  render() {
    let sounds = (
      <div>
        {this.state.sounds.map( ( sound, index ) => {
          return <Sound
            title = {sound.title}
            key = {sound.id}
            source = {sound.mp3File}
            volume = {sound.volume}
            changed = {(event) => this.volumeChangeHandler( event, sound.id)} />

        } )}
      </div>
    );
    return (
      <div className="App">
        <h1>You'll listen some sounds!</h1>
        {sounds}
      </div>

    );
  };
}

export default App;
