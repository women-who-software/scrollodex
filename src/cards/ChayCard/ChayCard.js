import React from 'react';
import './chayCard.scss';
import image from "./chay.png";

//

function ChayCard() {
  return (
    <div className="cardContainer-chay">

        <div className="card">
            <img className="imageContainer-chay" src={image} alt="example headshot of a woman" />
        </div>

        <div className="card-chay">
            <h3>Chay McCormick</h3>
            <p>Front-End Web Developer</p>
            <p>chayanit.chaisri@gmail.com</p>
            {/* <p>www.linkedin.com/in/chayanit-chaisri</p> */}
            <button className="chayButton"><a  target="_blank"   rel="noreferrer" href="https://www.linkedin.com/in/chayanit-chaisri">LinkedIn</a></button>
      </div>

    </div>
  );
}

export default ChayCard;