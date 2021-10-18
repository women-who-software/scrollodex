import React from "react";
import './noonCard.scss'
import image from "./noon_profile.png";

function NoonCard() {
  return (
    <div className="noonCardContainer">
        <div className="card">
            <img className="imageContainer" src={image} alt="noon-profile" />
        </div>
        <div className="card-info">
            <h3 className="name-h3">Noon Schluntz</h3>
            <p className="text-blue">Front-End Software Engineer</p>
            <p className="text-blue">nuanjan.schluntz@gmail.com</p>
            <a
            rel="noreferrer"
            className="social-link"
            target="_blank"
            href="https://www.linkedin.com/in/noon-schluntz/"
            >
            LinkedIn
            </a>
            <a
            rel="noreferrer"
            className="social-link"
            target="_blank"
            href="https://github.com/Nuanjan"
            >
            GitHub
            </a>
            <a
            rel="noreferrer"
            className="social-link"
            target="_blank"
            href="https://nuanjan.github.io/"
            >
            Portfolio
            </a>
        </div>
    </div>
  );
}

export default NoonCard;
