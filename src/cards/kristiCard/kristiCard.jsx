import React from 'react';
import './kristiCard.scss';
import image from './kristi_headshot.png';

//

function KristiCard() {
  return (
    <div className="cardContainer">

        <div className="card">
            <img className="imageContainer" src={image} alt="headshot" />
        </div>

        <div className="card">
            <h3>Kristi Perreault</h3>
            <p>Senior Software Engineer</p>
            <p>kristiperreault95@gmail.com</p>
            <p>www.linkedin.com/in/kristi-perreault</p>
      </div>

    </div>
  );
}

export default KristiCard;
