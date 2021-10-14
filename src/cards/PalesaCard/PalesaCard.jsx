import React from 'react';
import './palesaCard.scss';
import image from './palesaHeadShot.jpg';


function ExampleCard() {
  return (
    <div className="cardContainer">

        <div className="card">
            <img className="imageContainer" src={image} alt="headshot for display card" />
        </div>

        <div className="card">
            <h3>Palesa</h3>
            <p>Backend Developer</p>
            <p>leeann.mokoena@gmail.com</p>
            <p>www.janedoe.com</p>
            <p>GitHub:LeeAnn-Mokoena</p>
      </div>

    </div>
  );
}

export default ExampleCard;
