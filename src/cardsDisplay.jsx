import React from 'react';
import './cardsDisplay.scss';

import ExampleCard from './cards/exampleCard/exampleCard';
import KayleesCard from './cards/kayleesCard/kayleesCard'

function CardsDisplay() {
  return (
    <div className="cardholder">
      <div>
        <ExampleCard />
      </div>
      <div>
        <ExampleCard />
      </div>
      <div>
        <KayleesCard />
      </div>
    </div>
  );
}

export default CardsDisplay;
