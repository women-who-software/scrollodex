import React from 'react';
import './roniCard.scss';
import Roni from './roni-headshot.png';

//

function ExampleCard() {
  return (
    <div className="cardContainer">

        <div className="card">
            <img className="imageContainer" src={Roni} alt="example headshot of a woman" />
        </div>

        <div className="card">
            <h3>Roni Lockwood</h3>
            <p>Front-End Developer</p>
            <a href="mailto:rtlockwoodwork@gmail.com">Email</a> <br />
            <a href="roni.rocks" target="_blank">Portfolio Site</a> <br />
            <a href="github.com/OlliesWorld" target="_blank">Github</a>
      </div>

    </div>
  );
}

export default ExampleCard;
