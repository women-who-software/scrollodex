import React from 'react';
import './hongCard.scss';
import image from './hong-photo1.jpg';

function hongCard() {
  return (
    <div className="cardContainer">

        <div className="card">
            <img className="imageContainer" src={image} alt="a women standing in front of a water fountain" />
        </div>

        <div className="card">
            <h3>Hong Dang</h3>
            <p>Learning to Code</p>
      </div>

    </div>
  );
}

export default hongCard;
