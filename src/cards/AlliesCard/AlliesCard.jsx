import React from "react";
import "./AlliesCard.scss";
import image from "./allies_headshot.JPG";

function AlliesCard() {
  return (
    <div className="cardContainer">
      <div className="card">
        <img
          className="allieImageContainer"
          src={image}
          alt="example headshot of a woman"
        />
      </div>

      <div className="card">
        <h3>Allie LeFever</h3>
        <p>Software Engineer</p>
        <a href="https://www.linkedin.com/in/allie-lefever/">LinkedIn</a>
      </div>
    </div>
  );
}

export default AlliesCard;
