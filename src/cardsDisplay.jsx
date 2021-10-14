import React from 'react';
import './cardsDisplay.scss';

import ExampleCard from './cards/exampleCard/exampleCard';
import RachaelCard from "./cards/rachael-tCard/rachael-tCard";

function CardsDisplay(props) {
  return (
    <div className="cardholder">
      <div>
        <ExampleCard />
      </div>

      <div>
        <ExampleCard />
      </div>

      <div>
        <RachaelCard />
      </div>

  
    </div>
  );
}

export default CardsDisplay;
