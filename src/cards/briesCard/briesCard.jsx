import React, { useContext } from "react";
import { CardContext } from "../../App";
import "./briesCard.scss";
import image from "./skinnyBrie.jpg";

//

function BriesCard() {
  const { brielle } = useContext(CardContext);

  return (
    <div className="cardContainer">
      <div className="card">
        <img className="imageContainer" src={image} alt="skinny me" />
      </div>

      <div className="card">
        <div className="card-details">
          <h3>{brielle.data.name}</h3>
          <p>{brielle.data.title}</p>
          {
            // Loop through all the labeled emails and create a <p> tag for
            // each one. Add a unique key so react doesn't get mad.
            Object.keys(brielle.data.emails || {}).map((label, idx) => (
              <p key={`e-${idx}`}>
                {brielle.data.emails[label]} ({label})
              </p>
            ))
          }
          {
            // Do the same thing here for website values
            Object.keys(brielle.data.sites || {}).map((label, idx) => (
              <p key={`s-${idx}`}>
                {brielle.data.sites[label]} ({label})
              </p>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default BriesCard;
