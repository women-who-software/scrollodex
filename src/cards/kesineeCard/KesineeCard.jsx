import React from "react";
import "./kesineeCard.scss";
import image from "./kesinee_headshot.png";

function KesineeCard() {
  return (
    <div className="cardContainer">
      <div className="card">
        <img className="imageContainer" src={image} alt="kesinee's headshot" />
      </div>

      <div className="card">
        <h3>Kesinee Powers</h3>
        <p>Front-End Web Developer</p>
        <p>KesineePowers@gmail.com</p>

        <a
          className="link"
          target="_blank"
          href="https://www.linkedin.com/in/kesineepowers/"
        >
          {"LinkedIn"}
        </a>
        <a className="link" target="_blank" href="https://github.com/KesineeP">
          {"GitHub"}
        </a>
        <a className="link" target="_blank" href="https://kesineep.github.io/">
          {"Portfolio"}
        </a>
      </div>
    </div>
  );
}

export default KesineeCard;
