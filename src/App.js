import React, { Component } from 'react';
import './App.css';

import birds from './assets/birds.mp4';
import rain from './assets/rain.mp4';
import waves from './assets/waves.mp4';
import cricket from './assets/cricket.mp3';
import piano from './assets/piano.mp3';
import chimes from './assets/chimes.mp3';
import voice from './assets/voice.mp3';
import lullaby from './assets/lullaby.mp3';
import fire from './assets/fire.mp3';

import birdImg from './assets/bird.png';
import pianoImg from './assets/piano.png';
import cricketImg from './assets/cricket.png';
import wavesImg from './assets/waves.png';
import rainImg from './assets/rain.png';
import chimesImg from './assets/chimes.png';
import lullabyImg from './assets/lullaby.png';
import fireImg from './assets/fire.png';
import voiceImg from './assets/voice.png';

import Sounds from './Sounds/Sounds';
import Header from './Header/Header';

class App extends Component {

  state = {
    playAllStatus: false,
    buttonText: 'PLAY',
    sounds: [
      { id: '11', title: 'birds', mp3File: birds, img: birdImg, volume: '0', playStatus: false},
      { id: '22', title: 'rain', mp3File: rain, img: rainImg, volume: '0', playStatus: false},
      { id: '33', title: 'waves', mp3File: waves, img: wavesImg, volume: '0', playStatus: false},
      { id: '44', title: 'cricket', mp3File: cricket, img: cricketImg, volume: '0', playStatus: false},
      { id: '55', title: 'piano', mp3File: piano, img: pianoImg, volume: '0', playStatus: false},
      { id: '66', title: 'wind chimes', mp3File: chimes, img: chimesImg, volume: '0', playStatus: false},
      { id: '77', title: 'lullaby', mp3File: lullaby, img: lullabyImg, volume: '0', playStatus: false},
      { id: '88', title: 'voice', mp3File: voice, img: voiceImg, volume: '0', playStatus: false},
      { id: '99', title: 'fire', mp3File: fire, img: fireImg, volume: '0', playStatus: false}
    ]
  };

  changeVolume = ( event, id) => {
    const soundIndex = this.state.sounds.findIndex(s => {
      return s.id === id;
    });
    const sound = {
      ...this.state.sounds[soundIndex]
    };
    sound.volume = event.target.value;

    let sd = document.getElementById(id); 
    if (sound.volume > 0 && this.state.playAllStatus) {
      sd.play();
      sd.volume = sound.volume/20; 
      sound.playStatus = true;
    } else {
      sd.pause();
      sound.playStatus = false;
    }
    const sounds = [...this.state.sounds];
    sounds[soundIndex] = sound;
    this.setState({sounds: sounds});
  }

  playAllSounds = () => {
    const doesPlay = this.state.playAllStatus;
    this.setState({playAllStatus: !doesPlay});
    const playingSounds = this.state.sounds.filter(s => {
      return s.volume > 0;
    });
    playingSounds.forEach(s => {
      let ID = s.id;
      let sd = document.getElementById(ID); 
      if(s.playStatus){
        sd.pause();
        s.playStatus = false;
      } else {
        sd.play();
        s.playStatus = true;
      }
    })
  }

  render() {
    let sounds = (
      <div className="SoundsContainer">
        {this.state.sounds.map( ( sound, index ) => {
          return <Sounds
            title = {sound.title}
            key = {sound.id}
            id = {sound.id}
            source = {sound.mp3File}
            img = {sound.img}
            volume = {sound.volume}
            doesPlay = {sound.playStatus.toString()}
            changed = {(event) => this.changeVolume( event, sound.id)} />

        } )}
      </div>
    );
    return (
      <div className="App">

        <Header playAllSounds={this.playAllSounds} playAllStatus={this.state.playAllStatus} />

        {sounds}

      </div>

    );
  };
}

export default App;
