import React from 'react';
import './cardsDisplay.scss';

import ExampleCard from './cards/exampleCard/exampleCard';
//import DomCard from './Cards/DomCard';
import KristiCard from './cards/kristiCard/kristiCard';

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
        <KristiCard />
      </div>

  
    </div>
  );
}

export default CardsDisplay;
