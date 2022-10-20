import React from 'react';
import './rachelCard.scss';
import image from './rachel_headshot.jpg';

function RachelCard() {
  return (
    <div className="rachelCardContainer">

      <div className="card">
        <img className="imageContainer" src={image} alt="rachel headshot" />
      </div>

      <div className="card">
        <h3>Rachel Teeter</h3>
        <p>Software Engineer</p>
        <a
          rel="noreferrer"
          className="link"
          target="_blank"
          href="https://github.com/rteeter"
        >GitHub</a>
      </div>

    </div>
  );
}

export default RachelCard;
