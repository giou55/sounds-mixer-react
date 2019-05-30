import React from 'react';
import './Header.css';

const Header = (props) => {
    return (
        <div className="header">
          <h1>Calm Down and Listen</h1>
          <button className="btn" 
                  onClick={props.playAllSounds}>{props.playAllStatus ? 'PAUSE' : 'PLAY'}
            <i className={props.playAllStatus ? 'fas fa-pause' : 'fas fa-play'}></i>
          </button>
        </div>
    );
};

export default Header;