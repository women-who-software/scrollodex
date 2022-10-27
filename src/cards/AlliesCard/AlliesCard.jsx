import React, { useState } from "react";
import "./AlliesCard.scss";
import image from "./allies_headshot.JPG";

function AlliesCard() {
  const [darkMode, setDarkMode] = useState(false);

  function toggleDarkMode() {
    if (darkMode === false) {
      setDarkMode(true);
    } else {
      setDarkMode(false);
    }
  }

  return (
    <div className={`${darkMode ? "dark" : "light"}AllieCardContainer`}>
      <div className="alliecard">
        <img
          className="allieImageContainer"
          src={image}
          alt="Smiling tall white woman with long blonde hair wearing glasses and a red and deep blue floral print blouse sits in front of a white brick wall"
        />
      </div>

      <div className="alliecard">
        <h3>Allie LeFever</h3>
        <p>Software Engineer</p>
        <button className="allieLinkButton">
          <a
            className="allieLink"
            href="https://www.linkedin.com/in/allie-lefever/"
          >
            LinkedIn
          </a>
        </button>
        <button className="allieLinkButton">
          <a className="allieLink" href="https://github.com/alefever39">
            GitHub
          </a>
        </button>
      </div>

      <div></div>
      <div className="allieDarkButtonContainer">
        <button
          onClick={toggleDarkMode}
          className={`allieDarkButton ${
            darkMode ? "dark" : "light"
          }AllieDarkButton`}
        >
          Dark Mode
        </button>
      </div>
    </div>
  );
}

export default AlliesCard;
