import React from 'react';
import './rachael-tCard.scss';
import image from './rachael-t.png';

function ExampleCard() {
  return (
    <div className="cardContainer">

        <div className="card">
            <img className="imageContainer" src={image} alt="woman hiking in front of the mountains"/>
        </div>

        <div className="card">
            <h3>Rachael Thomas</h3>
            <p>Front-End Web Developer</p>
            <a href="www.github.com/rachael-t">GitHub</a>
            <br></br>
            <a href="www.linkedin.com/in/rachael-lenss-thomas">LinkedIn</a>
      </div>

    </div>
  );
}

export default ExampleCard;