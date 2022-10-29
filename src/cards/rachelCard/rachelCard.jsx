import React from 'react';
import './rachelCard.scss';
import image from './rachel_headshot.jpg';

function RachelCard() {
  return (
    <div className="rtCardContainer">

      <div className="rtcard">
        <img className="rtimageContainer" src={image} alt="rachel headshot" />
      </div>

      <div className="rtcard">
        <h3 className="rttext">Rachel Teeter</h3>
        <p className="rttext">Software Engineer</p>
        <a
          rel="noreferrer"
          className="rtlink"
          target="_blank"
          href="https://github.com/rteeter"
        >GitHub</a>
        <a
          rel="noreferrer"
          className="rtlink"
          target="_blank"
          href="https://www.linkedin.com/in/rachelteeter/"
        >LinkedIn</a>
      </div>

    </div>
  );
}

export default RachelCard;
