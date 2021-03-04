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

import birdImgLight from './assets/icons/bird-light.png';
import birdImgDark from "./assets/icons/bird-dark.png";
import pianoImgLight from './assets/icons/piano-light.png';
import pianoImgDark from "./assets/icons/piano-dark.png";
import cricketImgLight from './assets/icons/cricket-light.png';
import cricketImgDark from "./assets/icons/cricket-dark.png";
import wavesImgLight from './assets/icons/waves-light.png';
import wavesImgDark from "./assets/icons/waves-dark.png";
import rainImgLight from './assets/icons/rain-light.png';
import rainImgDark from "./assets/icons/rain-dark.png";
import chimesImgLight from './assets/icons/chimes-light.png';
import chimesImgDark from "./assets/icons/chimes-dark.png";
import lullabyImgLight from './assets/icons/lullaby-light.png';
import lullabyImgDark from "./assets/icons/lullaby-dark.png";
import fireImgLight from './assets/icons/fire-light.png';
import fireImgDark from "./assets/icons/fire-dark.png";
import voiceImgLight from './assets/icons/voice-light.png';
import voiceImgDark from "./assets/icons/voice-dark.png";

import Sounds from './Sounds/Sounds';
import Header from './Header/Header';

class App extends Component {
	state = {
		playAllStatus: false,
		sounds: [
			{
				id: "11",
				title: "birds",
				mp3File: birds,
				imgLight: birdImgLight,
				imgDark: birdImgDark,
				volume: "0",
				playStatus: false,
			},
			{
				id: "22",
				title: "rain",
				mp3File: rain,
				imgLight: rainImgLight,
				imgDark: rainImgDark,
				volume: "0",
				playStatus: false,
			},
			{
				id: "33",
				title: "waves",
				mp3File: waves,
				imgLight: wavesImgLight,
				imgDark: wavesImgDark,
				volume: "0",
				playStatus: false,
			},
			{
				id: "44",
				title: "cricket",
				mp3File: cricket,
				imgLight: cricketImgLight,
				imgDark: cricketImgDark,
				volume: "0",
				playStatus: false,
			},
			{
				id: "55",
				title: "piano",
				mp3File: piano,
				imgLight: pianoImgLight,
				imgDark: pianoImgDark,
				volume: "0",
				playStatus: false,
			},
			{
				id: "66",
				title: "wind chimes",
				mp3File: chimes,
				imgLight: chimesImgLight,
				imgDark: chimesImgDark,
				volume: "0",
				playStatus: false,
			},
			{
				id: "77",
				title: "lullaby",
				mp3File: lullaby,
				imgLight: lullabyImgLight,
				imgDark: lullabyImgDark,
				volume: "0",
				playStatus: false,
			},
			{
				id: "88",
				title: "voice",
				mp3File: voice,
				imgLight: voiceImgLight,
				imgDark: voiceImgDark,
				volume: "0",
				playStatus: false,
			},
			{
				id: "99",
				title: "fire",
				mp3File: fire,
				imgLight: fireImgLight,
				imgDark: fireImgDark,
				volume: "0",
				playStatus: false,
			},
		],
	};

	changeVolume = (event, id) => {
		const soundIndex = this.state.sounds.findIndex((s) => {
			return s.id === id;
		});
		const sound = {
			...this.state.sounds[soundIndex],
		};
		sound.volume = event.target.value;

		let sd = document.getElementById(id);
		if (sound.volume > 0 && this.state.playAllStatus) {
			sd.play();
			sd.volume = sound.volume / 20;
			sound.playStatus = true;
		} else {
			sd.pause();
			sound.playStatus = false;
		}
		const sounds = [...this.state.sounds];
		sounds[soundIndex] = sound;
		this.setState({ sounds: sounds });
	};

	playAllSounds = () => {
		const doesPlay = this.state.playAllStatus;
		this.setState({ playAllStatus: !doesPlay });
		const playingSounds = this.state.sounds.filter((s) => {
			return s.volume > 0;
		});
		playingSounds.forEach((s) => {
			let ID = s.id;
			let sd = document.getElementById(ID);
			if (s.playStatus) {
				sd.pause();
				s.playStatus = false;
			} else {
				sd.play();
				s.playStatus = true;
			}
		});
	};

	render() {
		let sounds = (
			<div className="SoundsContainer">
				{this.state.sounds.map((sound, index) => {
					return (
						<Sounds
							title={sound.title}
							key={sound.id}
							id={sound.id}
							source={sound.mp3File}
							imgDark={sound.imgDark}
							imgLight={sound.imgLight}
							opacity={sound.volume / 20}
							volume={sound.volume}
							doesPlay={sound.playStatus.toString()}
							changed={(event) =>
								this.changeVolume(event, sound.id)
							}
						/>
					);
				})}
			</div>
		);
		return (
			<div className="App">
				<Header
					playAllSounds={this.playAllSounds}
					playAllStatus={this.state.playAllStatus}
				/>

				{sounds}
			</div>
		);
	}
}

export default App;
