import React, { useContext, useState } from "react";
import { CardContext } from "../../App";
import "./jordanCard.scss";
import image from "./jordan.png";

//

function JordanCard() {
  const { jordan } = useContext(CardContext);

  const [styleDark, setStyleDark] = useState(false);
  const [StyleDefault, setStyleDefault] = useState(true);

  function swapStyle(newStyle) {
    setStyleDark(false);
    setStyleDefault(false);

    if (newStyle === "dark") {
      setStyleDark(true);
    } else {
      setStyleDefault(true);
    }
  }

  return (
    <div
      id="mj-card-container"
      className={`cardContainer  
      ${StyleDefault && "card-style-default"}
      ${styleDark && "card-style-dark"}
      `}
    >
      <div className="card mj-image">
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

      <div className="style-options">
        <button
          className={`style-button ${StyleDefault && "current-style"}`}
          type="button"
          onClick={() => swapStyle("default")}
        >
          Default
        </button>
        <button
          className={`style-button ${styleDark && "current-style"}`}
          type="button"
          onClick={() => swapStyle("dark")}
        >
          Dark Mode
        </button>
      </div>
    </div>
  );
}

export default JordanCard;
