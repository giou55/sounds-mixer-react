import React from 'react';
import './Sounds.css';

const Sounds = (props) => {
    return (
        <div className="SoundContainer">
            <h4>{props.title}</h4>
            <div className="SliderContainer">
                <span>
                    <p>Volume: {props.volume} <br></br> doesPlay: {props.doesPlay}</p>
                    <input type="range" onChange={props.changed} min="0" max="10" 
                           defaultValue={props.volume} className="slider">
                    </input>
                </span>
            </div>
            <div>
                <audio id={props.id} preload="auto" loop onProgress={props.isDownloading} onCanPlay={props.isReady}>
                    <source 
                        src={props.source}
                        type="audio/mp4" />
                </audio>
            </div>
        </div>
    );
};

export default Sounds;