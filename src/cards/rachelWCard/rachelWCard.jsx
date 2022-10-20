import React from 'react';
import './rachelWCard.scss';
import image from './rachelW_headshot.jpg';

function RachelWCard() {
  return (
    <div className="cardContainer">

        <div className="card">
            <img className="imageContainer" src={image} alt="example headshot of a woman" />
        </div>

        <div className="card">
            <h3>Rachel Weisberger</h3>
            <p>Junior Software Engineer</p>
            <a href='https://www.linkedin.com/in/rachel-weisberger-7247a3163/'>LinkedIn</a>
      </div>

    </div>
  );
}

export default RachelWCard;
