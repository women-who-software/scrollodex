import React from 'react';
import './jennDiazCard.scss';
import imageFront from './jenn.png';
import imageBack from './jenn-on-bike.png';


//

function jennDiazCard() {
  return (
    <div className="jdcardContainer">
      <div className="flip-image">
        <div className="flip-image-inner"> 
          <div className="flip-image-front"> 
            <img className="jdImage" src={imageFront}  alt="Jenn wearing a blue Dockwa vest outside with trees and a path behind her" />
          </div>
          <div className="flip-image-back"> 
            <img className="jdImage" src={imageBack}  alt="Jenn on a mountain bike descending a rock obstable" />
          </div>
        </div>
      </div>
      <div className="jdCard">
        <h3 className="jdInfo">Jenn Diaz</h3>
        <p className="jdInfo">Junior Software Engineer</p>
        <p>at The Wanderlust Group</p>
      <div className="jdLinks"> 
        <a className="jdLink" href="https://github.com/JAGrenier">Github</a>       
        <a className="jdLink" href="https://www.linkedin.com/in/jagdiaz">LinkedIn</a>
      </div>
      </div>
    </div>
  );
}

export default jennDiazCard;
