import React from 'react';
import './aHalverstadtCard.scss';
import image from './aHalverstadtHeadshot.png';

function AshleighCard() {
  return (
    <div className="ashleighCardContainer">

        <div className="ashleighCard">
            <img className="imageContainer" src={image} alt="Headshot of a white woman with pixie-style brown hair, smiling and standing in front of a boulder"/>
        </div>

        <div className="ashleighCard">
            <h3 className="ashleighName">Ashleigh Halverstadt</h3>
            <p className="ashleighText">Software Engineer</p>
            <div className="ashleighSocial">
              <a href="https://www.linkedin.com/in/ashleighhalverstadt/" rel="noreferrer" target="_blank" className="ashleighButton">LinkedIn</a>
              <a href="https://github.com/heretoshleigh" rel="noreferrer" target="_blank" className="ashleighButton">GitHub</a>
              <a href="https://www.ashleighcodes.com/" rel="noreferrer" target="_blank" className="ashleighButton">Portfolio</a>
            </div>
      </div>

    </div>
  );
}

export default AshleighCard;
