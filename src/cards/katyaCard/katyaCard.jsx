import React from 'react';
import './katyaCard.scss';
import image from './KatyaHeadshot.jpg';

function KatyaCard() {
  return (
    <div className="kat-cardContainer">

        <div className="kat-card">
            <img className="kat-imageContainer" src={image} alt="example headshot of a woman" />
            <div className="kat-image-border"></div>
        </div>

        <div className="kat-card">
            <h3 className="kat-header">Katya Sarmiento</h3>
            <span className="role1">Full-Stack Developer</span><span className="role2">Lifelong Learner</span>
            <a href="https://github.com/Kitkatnik/" target="_blank" rel="noreferrer" className="kat-button">GITHUB</a>
            <a href="https://www.polywork.com/kitkatnik" target="_blank" rel="noreferrer" className="kat-button">POLYWORK</a>
            <a href="https://www.linkedin.com/in/katyasarmiento/" target="_blank" rel="noreferrer" className="kat-button">LINKEDIN</a>
        </div>

    </div>
  );
}

export default KatyaCard;