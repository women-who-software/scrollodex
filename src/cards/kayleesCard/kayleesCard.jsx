import React from 'react';
import './kayleesCard.scss';
import image from './kaylee_mchugh_prof.jpg';

function ExampleCard() {
  return (
    <div className="cardContainer">

        <div className="card kayleesCard">
            <img className="imageContainer" src={image} alt="kaylee headshot" />
        </div>

        <div className="kayleesCard">
            <h3>Kaylee McHugh</h3>
            <p>CEO, ChattyKathi.com</p>
            <p>kaylee@chattykathi.com</p>
            <p>www.chattykathi.com</p>
      </div>

    </div>
  );
}

export default ExampleCard;
