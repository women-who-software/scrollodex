import React from 'react';
import './exampleCard.scss';
import image from './example_headshot.png';

//

function ExampleCard() {
  return (
    <div className="cardContainer">

        <div className="card">
            <img className="imageContainer" src={image} alt="example headshot of a woman" />
        </div>

        <div className="card">
            <h3>Jane Doe</h3>
            <p>Front-End Web Developer</p>
            <p>janedoe@example.com</p>
            <p>www.janedoe.com</p>
      </div>

    </div>
  );
}

export default ExampleCard;
