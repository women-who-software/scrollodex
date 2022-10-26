import React from 'react';
import './rachael-tCard.scss';
import image from './rachael-t.png';

function ExampleCard() {
  return (
    <div className="rachaelCardContainer">
      <div className="rachaelCard">
        <img className="rachaelImageContainer" src={image} alt="woman hiking in front of the mountains" />
      </div>

      <div className="rachaelCard">
        <h3 className="rachaelName">Rachael Thomas</h3>
        <p className="rachaelTitle">Senior Technical Support Engineer</p>
        <div className="rachaelLinkContainer">
          <a className="rachaelLink" href="https://www.github.com/rachael-t">GitHub</a>
          <br></br>
          <a className="rachaelLink" href="https://www.linkedin.com/in/rachael-lenss-thomas">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

export default ExampleCard;
