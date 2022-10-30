import React from 'react';
import './rachelWCard.scss';
import image from './rachelW_headshot.jpg';

function RachelWCard() {
  return (
    <div className="cardContainer cardImage">
        <div className="card">
            <img className="imageContainer" src={image} alt="headshot of Rachel Weisberger" />
        </div>

        <div className="rachelWCard">
            <h3 className="shadow">Rachel Weisberger</h3>
            <p className="shadow">Junior Software Engineer</p>
            <a className='myLink' href='https://rweisberger.github.io/'>Portfolio</a>
            <a className='myLink' href='https://www.linkedin.com/in/rachel-weisberger-7247a3163/'>LinkedIn</a>

      </div>

    </div>
  );
}

export default RachelWCard;
