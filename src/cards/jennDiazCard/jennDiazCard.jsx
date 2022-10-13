import React from 'react';
import './jennDiazCard.scss';
import headshot from './jenn.png';


//

function jennDiazCard() {
  return (
    <div className="jennsCardContainer">
        <div className="card">
            <img className="imageContainer" src={headshot} alt="headsht of a white women with brown hair smiling and standing outside" />
        </div>
        <div className="card">
            <h3 className="jdName">Jennifer Grenier Diaz</h3>
            <p className="jdText">Software Engineer</p>
            <p className="jdText">specializing in web accessibility and usability</p>
        <div className="buttons">
          <a className="button" href="https://github.com/jenndiaz">GitHub</a>
          <a className="button" href="https://github.com/jenndiaz">LinkedIn</a>
          <a className="button" href="https://github.com/jenndiaz">Blog</a>
        </div>
      </div>


    </div>
  );
}

export default jennDiazCard;
