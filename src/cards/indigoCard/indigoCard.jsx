import React from "react";
import "./indigoCard.scss";
import image from "./indigo_headshot.png";
import { data } from "./data.js";

export default function IndigoCard() {
  return (
    <div className="cardContainer-indigo">
      <div className="card">
        <img
          className="imageContainer"
          src={image}
          alt="example headshot of a woman"
        />
      </div>

      <div className="card-indigo">
        <h3>{data.name}</h3>
        <p>{data.role}</p>
        <p>{data.email}</p>
        <a href={data.website}>{data.website}</a>
      </div>
    </div>
  );
}
