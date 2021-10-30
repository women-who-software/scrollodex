import React from 'react';
import './audreaCard.scss';
import image from './audrea_headshot.jpg';

//

function AudreaCard() {
  return (
    <div className="cardContainer">

        <div className="card">
            <img className="imageContainer" src={image} alt="Headshot of Audrea Cook" />
        </div>

        <div className="card">
            <h3>Audrea Cook</h3>
            <p>Software Engineer</p>
            <a href="https://codewitch.dev">CodeWitch.dev</a>
            <br></br>
            <a href="https://www.github.com/audthecodewitch">GitHub</a>
            <br></br>
            <a href="https://www.linkedin.com/in/audreacook">LinkedIn</a>
      </div>

    </div>
  );
}

export default AudreaCard;
