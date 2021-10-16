import React from 'react';
import './roniCard.scss';
import headshot from './roni_headshot.png';


//

function RoniCard() {
  return (
    <div className="cardContainer">

        <div className="card">
            <img className="imageContainer" src={headshot} 
              
              alt="Roni and Ollie adventuring" />
        </div>

        <div className="card">
            <h3>Roni Lockwood</h3>
            <p>Front-End Developer</p>
            <p>rtlockwoodwork@gmail.com</p>

            <p>Links</p>
            <a href="https://github.com/OlliesWorld" target="_blank" rel="noreferrer" alt="Roni's Github">GitHub</a>
            <br />
            <a href="https://roni.rocks/" target="_blank" rel="noreferrer" alt="Roni's Portfolio site">Portfolio Site</a>
      </div>

    </div>
  );
}

export default RoniCard;
