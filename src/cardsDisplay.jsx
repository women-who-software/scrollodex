import React, { useContext, useState } from "react";
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
import KatyaCard from "./cards/katyaCard/katyaCard";
import ExampleCard from "./cards/exampleCard/exampleCard";
import RachelWCard from "./cards/rachelWCard/rachelWCard";
import AshleighCard from "./cards/aHalverstadtCard/aHalverstadtCard";
import RachelCard from "./cards/rachelCard/rachelCard";
import JamesKCard from "./cards/jamesKCard/JamesKCard";

function CardsDisplay() {
  const contributors = useContext(CardContext);

  // Set up cards with all the different ways cards are created
  const cards = [
    { name: "Example", component: <ExampleCard /> },
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
    { name: "Rachel", component: <RachelWCard />},
    { name: "Ashleigh", component: <AshleighCard /> },
    { name: "Rachel", component: <RachelCard /> },
    { name: "Katya", component: <KatyaCard /> },
    { name: "James", component: <JamesKCard /> },
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

  // Set up different sorting methods for the cards
  let initialCards = cards;
  let sortedCards = [];
  let randomCards = [];

  for (let i = 0; i < cards.length; i++) {
    sortedCards.push(cards[i]);
    randomCards.push(cards[i]);
  }

  sortedCards.sort((a, b) => {
    if (a.name > b.name) {
      return 1;
    } else {
      return -1;
    }
  });

  const randomizeCards = () => {
    randomCards.sort(() => {
      return Math.random() - 0.5;
    });

    setDisplayedCards(randomCards);
  };

  const [displayedCards, setDisplayedCards] = useState(initialCards);

  return (
    <>
      <div className="sort-by-bar">
        <button className="btn btn-main" onClick={() => setDisplayedCards(initialCards)}>Initial</button>
        <button className="btn btn-main" onClick={() => setDisplayedCards(sortedCards)}>
          Alphabetical
        </button>
        <button className="btn btn-main" onClick={() => randomizeCards()}>Randomize</button>
      </div>
      <div className="cardholder">
        {displayedCards.map((card, i) => {
          return <div name={card.name} children={card.component} key={i} />;
        })}
      </div>
    </>
  );
}

export default CardsDisplay;
