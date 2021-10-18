import React from "react";
import "./indigoCard.scss";
//import image from "/Users/indigostarr/Documents/codingProjects/scrollodex/src/images/indigo_headshot.png";
import { data } from "./data.js";

export default function IndigoCard() {
  return (
    <div className="cardContainer indigo">
      <div>
        <img className="imageContainer" src={"/"} alt="Indigo Starr" />
      </div>

      <div className="card">
        <h3>{data.name}</h3>
        <p>{data.role}</p>
        <p>{data.email}</p>
        <a href={data.website}>{data.website}</a>
      </div>
    </div>
  );
}
