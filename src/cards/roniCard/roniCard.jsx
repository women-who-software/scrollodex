import React from 'react';
import './roniCard.scss';
import image from './roni_headshot.png';

//

function RoniCard() {
  return (
    <div className="cardContainer">

        <div className="card">
            <img className="imageContainer" src={image} alt="Roni and Ollie's headshot of a woman" />
        </div>

        <div className="card">
            <h3>Roni Lockwood</h3>
            <p>Front-End Web Developer</p>
            <p>rtlockwoodwork@gmail.com</p>

            <p>Links</p>
            <a href="https://github.com/OlliesWorld" target="_blank" rel="noreferrer" alt="Roni's Github">GitHub</a>
            <a href="https://roni.rocks/" target="_blank" rel="noreferrer" alt="Roni's Portfolio site">Portfolio Site</a>
      </div>

    </div>
  );
}

export default RoniCard;
