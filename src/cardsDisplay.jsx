import React from "react";
import "./cardsDisplay.scss";

import ExampleCard from "./cards/exampleCard/exampleCard";
import KayleesCard from "./cards/kayleesCard/kayleesCard";
import IndigoCard from "./cards/indigoCard/indigoCard";
import KristiCard from "./cards/kristiCard/kristiCard";
import ChayCard from "./cards/ChayCard/ChayCard";
import KesineeCard from "./cards/kesineeCard/KesineeCard";
import JennDiazCard from "./cards/jennDiazCard/jennDiazCard";
import RachaelCard from "./cards/rachael-tCard/rachael-tCard";
import ChumleyCard from "./cards/chumleyCard/chumleyCard";
import BriesCard from "./cards/briesCard/briesCard";
import PalesaCard from "./cards/PalesaCard/PalesaCard";
import NoonCard from "./cards/noonCard/NoonCard";
import RhondaCard from "./cards/rhondaCard/rhondaCard";
import DomsCard from "./cards/domsCard/domsCard";
import JordanCard from "./cards/mjordanCard/jordanCard";

function CardsDisplay(props) {
  return (
    <div className="cardholder">
      <div>
        <ExampleCard />
      </div>
      <div>
        <JennDiazCard />
      </div>
      <div>
        <IndigoCard />
      </div>
      <div>
        <KristiCard />
      </div>
      <div>
        <ChayCard />
      </div>
      <div>
        <KayleesCard />
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
      <div>
        <BriesCard />
      </div>
      <div>
        <DomsCard />
      </div>
      <div>
        <JordanCard />
      </div>
      <div>
        <NoonCard />
      </div>
      <div>
        <RhondaCard />
      </div>
    </div>
  );
}

export default CardsDisplay;
