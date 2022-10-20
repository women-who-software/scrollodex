import React from 'react';
import './katyaCard.scss';
import image from './KatyaHeadshot.jpg';

function KatyaCard() {
  return (
    <div className="kat-cardContainer">

        <div className="kat-card">
            <img className="kat-imageContainer" src={image} alt="example headshot of a woman" />
            <div class="kat-image-border"></div>
        </div>

        <div className="card">
            <h3>Katya Sarmiento</h3>
            <p>Operations Manager turned Full-Stack Developer</p>
            <a href="https://github.com/Kitkatnik/" className="button">GitHub</a>
            <a href="https://www.polywork.com/kitkatnik" className="button">Polywork</a>
            <a href="https://www.linkedin.com/in/katyasarmiento/" className="button">LinkedIn</a>
        </div>

    </div>
  );
}

export default KatyaCard;
