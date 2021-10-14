import React from "react";
import "./indigoCard.scss";
import image from "./indigo_headshot.png";
import { data } from "./data.js";

export default function IndigoCard() {
  return (
    <div className="cardContainer">
      <div className="card">
        <img
          className="imageContainer"
          src={image}
          alt="example headshot of a woman"
        />
      </div>

      <div className="card">
        <h3>{data.name}</h3>
        <p>{data.role}</p>
        <p>{data.email}</p>
        <p>{data.website}</p>
      </div>
    </div>
  );
}
