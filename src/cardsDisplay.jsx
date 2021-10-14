import React from 'react';
import './cardsDisplay.scss';

import ExampleCard from './cards/exampleCard/exampleCard';
import palesaCard from './Cards/palesaCard';

function CardsDisplay() {
  return (
    <div className="cardholder">
      <div>
        <ExampleCard />
      </div>

      <div>
        <ExampleCard />
      </div>

  
    </div>
  );
}

export default CardsDisplay;
