import React from 'react';
import './Sounds.css';

const Sounds = (props) => {
    return (
        <div className="OneSoundContainer">
        <img src={props.img} alt=""></img>
            <h4>{props.title}</h4>
            <div className="SliderContainer">
                <span>
                    <p>Volume: {props.volume}</p>
                    <input type="range" onChange={props.changed} min="0" max="20" 
                           defaultValue={props.volume} className="slider">
                    </input>
                </span>
            </div>
            <div>
                <audio id={props.id} preload="auto" loop>
                    <source 
                        src={props.source}
                        type="audio/mp4" />
                </audio>
            </div>
        </div>
    );
};

export default Sounds;