import React from "react";
import "./cardsDisplay.scss";


import ExampleCard from "./cards/exampleCard/exampleCard";
import IndigoCard from "./cards/indigoCard/indigoCard";
import KristiCard from './cards/kristiCard/kristiCard';
import ChumleyCard from "./cards/chumleyCard/chumleyCard";


function CardsDisplay(props) {
  return (
    <div className="cardholder">
      <div>
        <ExampleCard />
      </div>

      <div>
        <IndigoCard />
      </div>

      <div>
        <KristiCard />
      </div>

      <div>
        <ChumleyCard />
      </div>


    </div>
  );
}

export default CardsDisplay;
