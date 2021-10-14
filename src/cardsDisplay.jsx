import React from 'react';
import './cardsDisplay.scss';

import ExampleCard from './cards/exampleCard/exampleCard';
import PalesaCard from './cards/palesaCard/palesaCard';

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
          <PalesaCard />
        </div>

  
    </div>
  );
}

export default CardsDisplay;
