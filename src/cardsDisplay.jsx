import React, { useContext } from "react";
import "./cardsDisplay.scss";
import { CardContext } from "./App";
import Card from "./Components/Card";
import ExampleCard from "./cards/exampleCard/exampleCard";
import KayleesCard from "./cards/kayleesCard/kayleesCard";
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
import RonisCard from "./cards/ronisCard/roniCard";
import ParastouCard from "./cards/parastouCard/parastouCard";

function CardsDisplay() {
  const contributors = useContext(CardContext);

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
      <div>
        <RonisCard />
      </div>
      <div>
        <ParastouCard />
      </div>
      {Object.keys(contributors).map((contributor) => {
        if (
          contributor !== "brielle" &&
          contributor !== "jordan" &&
          contributor !== "rhonda" &&
          contributor !== "parastou"
        ) {
          return (
            <div key={contributors[contributor].component}>
              <Card {...contributors[contributor]} />
            </div>
          );
        } else {
          return null;
        }
      })}
    </div>
  );
}

export default CardsDisplay;
