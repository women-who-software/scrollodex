import React from "react";
import "./domsCard.scss";
import image from "./dom_120x120.png";

function DomsCard() {
  return (
    <div className="domCardContainer">
        <img className="imageContainer" src={image} alt="black and white headshot of a white woman with curled hair" />
      
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
