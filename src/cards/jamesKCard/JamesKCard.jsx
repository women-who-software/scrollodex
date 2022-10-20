import React from 'react';
import './JamesKCard.scss';
import image from './hawaiiJames.jpg';

function JamesKCard() {
  return (
    <div className="cardContainer">

        <div className="card">
            <img className="imageContainer" src={image} alt="example headshot of a woman" />
        </div>

        <div className="card">
            <h3>James Kim</h3>
            <p>Software Engineer</p>
            <p>jemsgold21@gmail.com</p>
      </div>

    </div>
  );
}

export default JamesKCard;
