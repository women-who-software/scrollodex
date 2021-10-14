import React from 'react';
import './cardsDisplay.scss';

import ExampleCard from './cards/exampleCard/exampleCard';
import palesaCard from './cards/palesaCard/palesaCard';

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
