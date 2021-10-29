import React, { useContext } from 'react';
import { CardContext } from '../../App';
import './parastouCard.scss';
import image from './parastouHeadshot.JPG';

function ParastouCard() {
  const { parastou } = useContext(CardContext);
  return (
    <div className="parastou-cardContainer">
      <img className="parastou-imageContainer" src={image} alt="Parastou's Headshot" />
      <div className="parastou-card">
        <h4>{parastou.data.name}</h4>
        <p className="parastou-title">{parastou.data.title}</p>
        <a
          rel="noreferrer"
          className="parastou-link"
          target="_blank"
          href={parastou.data.linkedin} >
          {"LinkedIn"}
        </a>
        <a
          rel="noreferrer"
          className="parastou-link"
          target="_blank"
          href={parastou.data.github} >
          {"GitHub"}
        </a>
      </div>
    </div>
  );
}

export default ParastouCard;
