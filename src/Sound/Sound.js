import React from 'react';

const Sound = (props) => {
    return (
        <div className="SoundContainer">
            <h3>{props.title}</h3>
            <div className="SoundSlider">
                <span>
                    <p>{props.volume}</p>
                    <input type="range" onChange={props.changed} min="0" max="100" defaultValue={props.volume}></input>
                </span>
            </div>
            <div>
                <audio preload="auto" loop controls autoPlay>
                    <source 
                        className="mp3" 
                        src={props.source}
                        type="audio/mp4" />
                </audio>
                <audio preload="auto">
                    <source 
                        className="gluemp3" 
                        src="" 
                        type="audio/mp3" />
                </audio>
            </div>
        </div>
    );
};

export default Sound;