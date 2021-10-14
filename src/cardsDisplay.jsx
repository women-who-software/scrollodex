import React from 'react';
import './cardsDisplay.scss';

import ExampleCard from './cards/exampleCard/exampleCard';
import JennDiazCard from './cards/jennDiazCard/jennDiazCard'
//import DomCard from './Cards/DomCard';

function CardsDisplay() {
  return (
    <div className="cardholder">
      <div>
        <ExampleCard />
      </div>

      <div>
      <JennDiazCard />
      </div>

  
    </div>
  );
}

export default CardsDisplay;
