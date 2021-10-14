import React from 'react';
import './palesaCard.scss';
import image from './palesaHeadShot.jpg';


function PalesaCard() {
  return (
    <div className="cardContainer">

        <div className="card">
            <img className="imageContainer" src={image} alt="headshot for display card" />
        </div>

        <div className="card">
            <h3>Marissa Styles</h3>
            <p>Backend Developer</p>
            <p>marissa@engineering.com</p>
            <p>www.marissastyles.com</p>
      </div>

    </div>
  );
}

export default PalesaCard;
