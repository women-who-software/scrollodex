import React from 'react';
import './palesaCard.scss';
import image from './palesaheadshot.jpg';


function PalesaCard() {
  return (
    <div className="cardContainer">

        <div className="card">
            <img className="imageContainer" src={image} alt="headshot for display card" />
        </div>

        <div className="card">
            <h3>Palesa Mokoena</h3>
            <p>Backend Developer</p>
            <p>leeann.mokoena@gmail.com</p>
            <p>GitHub Profile: Lee-Ann-Mokoena</p>
      </div>

    </div>
  );
}

export default PalesaCard;
