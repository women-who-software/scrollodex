import React from 'react';
import './jennDiazCard.scss';
import image from './jenn.png';

//

function jennDiazCard() {
  return (
    <div className="jdcardContainer">
      <div>
        <img className="cartoon" src={image} alt="cartoon image of person with long hair smiling at a computer" />
      </div>
      <div className="jdcard">
        <h3>Jenn Grenier Diaz</h3>
        <p>Full Stack Software Engineer</p>
        <p>JenniferAGrenier@gmail.com</p>
        <p>https://github.com/JAGrenier</p>
      </div>
    </div>
  );
}

export default jennDiazCard;
