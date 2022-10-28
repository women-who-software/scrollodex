import React from "react";
import './lovelaceCard.scss'
import image from "./lovelace.png";

function LovelaceCard() {
  return (
    <div className="lovelaceCardContainer">
      <div className="card">
        <img className="imageContainer" src={image} alt="drawing of a victorian era woman with a gold headband and long dark hair"/>
      </div>
      <div className="card card-info">
        <h3 className="name-h3">Ada Lovelace</h3>
        <p className="text-blue">The first computer programmer</p>
        <a
          rel="noreferrer"
          className="social-link"
          target="_blank"
          href="https://en.wikipedia.org/wiki/Ada_Lovelace"
        >
          Wikipedia
        </a>
      </div>
    </div>
  );
}

export default LovelaceCard;
