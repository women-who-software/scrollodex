import React from "react";
import "./domsCard.scss";
import image from "./dom_photo1.png";

function DomsCard() {
  return (
    <div className="domCardContainer">
      <div className="card">
        <img className="imageContainer" src={image} alt="dom's headshot" />
      </div>

      <div className="card">
        <h3>Dominika Wilk</h3>
        <p>Sr Software Engineer</p>
        
        <a
          rel="noreferrer"
          className="link"
          target="_blank"
          href="https://www.linkedin.com/in/dominikawilk/">
          {"LinkedIn"}
        </a>
        <a
          rel="noreferrer"
          className="link"
          target="_blank"
          href="https://github.com/domsbytes">
          {"GitHub"}
        </a>
      </div>
    </div>
  );
}

export default DomsCard;
