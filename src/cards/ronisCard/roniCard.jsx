import React from 'react';
import './roniCard.scss';
import Roni from './roni-headshot.png';

function ExampleCard() {
  return (
    <div className="cardContainer roni-container">

        <div className="card">
            <img className="imageContainer roniImg" src={Roni} alt="example headshot of a woman" />
        </div>

        <div className="card roni-card">
            <h3>Roni Lockwood</h3>
            <p>Front-End Developer</p>
            <a href="mailto:rtlockwoodwork@gmail.com" className="email">rtlockwoodwork@gmail.com</a> 
            <div className="links">
              <a href="github.com/OlliesWorld" target="_blank">Github</a>
              <a href="roni.rocks" target="_blank">Portfolio</a> 
            </div>
      </div>

    </div>
  );
}

export default ExampleCard;
