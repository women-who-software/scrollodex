import React from 'react';
import './aHalverstadtCard.scss';
import image from './aHalverstadtHeadshot.png';

function AshleighCard() {
  return (
    <div className="cardContainer">

        <div className="card">
            <img className="imageContainer" src={image} alt="Ashleigh Halverstadt's headshot"/>
        </div>

        <div className="card">
            <h3>Ashleigh Halverstadt</h3>
            <p>Software Engineer</p>
            <a href="https://www.ashleighcodes.com/" rel="noreferrer" target="_blank">Portfolio</a>
            <a href="https://github.com/heretoshleigh" rel="noreferrer" target="_blank">Github</a>
            <a href="https://www.linkedin.com/in/ashleighhalverstadt/" rel="noreferrer" target="_blank">LinkedIn</a>
      </div>

    </div>
  );
}

export default AshleighCard;
