import React, { useContext } from "react";
import "./cardsDisplay.scss";
import { CardContext } from "./App";
import Card from "./Components/Card";

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
import AudreaCard from "./cards/audreasCard/audreaCard";
import LovelaceCard from "./cards/lovelaceCard/LovelaceCard";

function CardsDisplay() {
  const contributors = useContext(CardContext);

  const cards = [
    { name: "Kaylee", component: <KayleesCard /> },
    { name: "Kristi", component: <KristiCard /> },
    { name: "Chay", component: <ChayCard /> },
    { name: "Kesinee", component: <KesineeCard /> },
    { name: "Jenn", component: <JennDiazCard /> },
    { name: "Rachael", component: <RachaelCard /> },
    { name: "Rebecca", component: <ChumleyCard /> },
    { name: "Brie", component: <BriesCard /> },
    { name: "Palesa", component: <PalesaCard /> },
    { name: "Noon", component: <NoonCard /> },
    { name: "Rhonda", component: <RhondaCard /> },
    { name: "Dominika Wilk", component: <DomsCard /> },
    { name: "Jordan", component: <JordanCard /> },
    { name: "Roni", component: <RonisCard /> },
    { name: "Parastou", component: <ParastouCard /> },
    { name: "Audrea", component: <AudreaCard /> },
    { name: "Ada", component: <LovelaceCard /> },
  ];

  Object.keys(contributors).forEach((contributor) => {
    if (
      contributor !== "brielle" &&
      contributor !== "jordan" &&
      contributor !== "rhonda"
    ) {
      cards.push({
        name: contributors[contributor].data.name,
        component: (
          <Card
            key={contributors[contributor].component}
            {...contributors[contributor]}
          />
        ),
      });
    } else {
      return null;
    }
  });

  let sortedCards = cards.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });

  return (
    <div className="cardholder">
      {sortedCards.map((card, i) => {
        return <div name={card.name} children={card.component} />;
      })}
    </div>
  );
}

export default CardsDisplay;
