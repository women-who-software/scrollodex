import React from 'react';
import './cardsDisplay.scss';

import ExampleCard from './cards/exampleCard/exampleCard';
import RoniCard from './cards/roniCard/roniCard';

function CardsDisplay() {
  return (
    <div className="cardholder">
      <div>
        <ExampleCard />
      </div>

      <div>
        <RoniCard />
      </div>

  
    </div>
  );
}

export default CardsDisplay;
