import React from "react";
import "./cardsDisplay.scss";
import Card from "./Components/Card";

import ExampleCard from "./cards/exampleCard/exampleCard";
// import IndigoCard from "./cards/indigoCard/indigoCard";
import KristiCard from "./cards/kristiCard/kristiCard";
import ChayCard from "./cards/ChayCard/ChayCard";
import KesineeCard from "./cards/kesineeCard/KesineeCard";
import JennDiazCard from "./cards/jennDiazCard/jennDiazCard";
import RachaelCard from "./cards/rachael-tCard/rachael-tCard";
import ChumleyCard from "./cards/chumleyCard/chumleyCard";
// import BriesCard from "./cards/briesCard/briesCard";
import PalesaCard from "./cards/PalesaCard/PalesaCard";

function CardsDisplay(props) {
  const contributors = props.cardsDatabase;

  return (
    <div className="cardholder">
      <div>
        <ExampleCard />
      </div>

      <div>
        <JennDiazCard />
      </div>

      <div>
        <KristiCard />
      </div>

      <div>
        <ChayCard />
      </div>

      <div>
        <KesineeCard />
      </div>

      <div>
        <ChumleyCard />
      </div>

      <div>
        <RachaelCard />
      </div>

      <div>
        <PalesaCard />
      </div>

      {Object.entries(contributors).map((contributor) => {
        return (
          <div>
            <Card key={contributor[0]} {...contributor[1]} />
          </div>
        );
      })}
    </div>
  );
}

export default CardsDisplay;
