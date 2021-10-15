import React from 'react';
import './chumleyCard.scss';
import image from './chumley_headshot.png';

//

function ChumleyCard() {
  return (
    <div className="cardContainer chumley">
      <div className="card">
        <img className="imageContainer" src={image} alt="Rebecca Chumley" />
      </div>

      <div className="card">
        <h3>Rebecca Chumley</h3>
        <p>Front-End Web Developer</p>
        <p>rebecca.chumley@gmail.com</p>
        <p>https://www.linkedin.com/in/rebecca-chumley/</p>
      </div>
    </div>
  );
}

export default ChumleyCard;