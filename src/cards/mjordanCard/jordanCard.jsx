import React, { useContext, useState } from "react";
import { CardContext } from "../../App";
import "./jordanCard.scss";
import image from "./jordan.png";
import GhostFriend from "./ghost";

//

function JordanCard() {
  const { jordan } = useContext(CardContext);

  const [styleRainbow, setStyleRainbow] = useState(true);
  const [styleDark, setStyleDark] = useState(false);
  const [styleNeon, setStyleNeon] = useState(false);
  const [styleSpooky, setStyleSpooky] = useState(false);

  function swapStyle(newStyle) {
    setStyleDark(false);
    setStyleRainbow(false);
    setStyleNeon(false);
    setStyleSpooky(false);

    if (newStyle === "dark") {
      setStyleDark(true);
    } else if (newStyle === "rainbow") {
      setStyleRainbow(true);
    } else if (newStyle === "neon") {
      setStyleNeon(true);
    } else if (newStyle === "spooky") {
      setStyleSpooky(true);
    }
  }

  return (
    <div
      id="mj-card-container"
      className={`cardContainer  
      ${styleDark && "card-style-dark"}
      ${styleNeon && "card-style-neon"}
      ${styleRainbow && "card-style-rainbow"}
      ${styleSpooky && "card-style-spooky"}
      `}
    >
      <div id="ghost-friend">
        <GhostFriend />
      </div>
      <div className="card mj-image">
        {styleRainbow && (
          <svg
            viewBox="0 0 288 300.41"
            xmlns="http://www.w3.org/2000/svg"
            fillRule="evenodd"
            clipRule="evenodd"
            strokeLinejoin="round"
          >
            <clipPath id="mask">
              <path
                d="M223.64,89.77c-0.26-3.79,11.46-17.08,13.58-20.23c22.72-33.79-42.79-116.86-185.2-5.23
	C-81.3,168.8,150.51,179.94,85.9,254.3s168.86,22.31,182.7-8.46C282.07,215.92,232.5,220.73,223.64,89.77z"
              />
            </clipPath>
            <image
              width="100%"
              height="100%"
              clipPath="url(#mask)"
              preserveAspectRatio="xMidYMid slice"
              href={image}
            />
          </svg>
        )}
        {!styleRainbow && (
          <img
            src={image}
            alt="artist rendered headshot of female human with brown hair and blue glasses"
          />
        )}
      </div>

      <div className="card">
        <div className="card-details">
          <h3>{jordan.data.name}</h3>
          <p>
            I'm a <span>{jordan.data.title}</span> at{" "}
            <span>
              <a href={jordan.data["company-url"]}>{jordan.data.company}</a>
            </span>
          </p>

          <div className="mj-links">
            <p>
              <a href={`mailto:${jordan.data.email}`}>{jordan.data.email}</a>
            </p>
            {Object.keys(jordan.data.sites || {}).map((label, idx) => (
              <p key={`s-${idx}`}>
                <a
                  href={`${jordan.data.sites[label]}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  {jordan.data.sites[label].substring(8)}
                </a>
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="style-options">
        <button
          className={`style-button ${styleRainbow && "current-style"}`}
          type="button"
          onClick={() => swapStyle("rainbow")}
        >
          <span>Rainbow</span>
        </button>

        <button
          className={`style-button  ${styleDark && "current-style"}`}
          type="button"
          onClick={() => swapStyle("dark")}
        >
          <span>Dark</span>
        </button>

        <button
          className={`style-button  ${styleNeon && "current-style"}`}
          type="button"
          onClick={() => swapStyle("neon")}
        >
          <span>Neon</span>
        </button>

        <button
          className={`style-button  ${styleSpooky && "current-style"}`}
          type="button"
          onClick={() => swapStyle("spooky")}
        >
          <span>Spooky</span>
        </button>
      </div>
    </div>
  );
}

export default JordanCard;
