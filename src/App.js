import React from "react";
//import './App.scss';
import CardsDisplay from "./cardsDisplay";
//import BootstrapDisplay from './BootstrapDisplay';
import "./index.css";
import db from "./cardData.json";
import Header from "./Components/Header";

// Create some context based on the data models stored in the cardData.json
// file. This can be imported and used in any component below. This will allow
// any card component to share data from the cardData.json file.
// See briesCard.jsx as an example of use.
export const CardContext = React.createContext(db.cardsDatabase);

function App() {

  return (
    <CardContext.Provider style={{position: "relative"}} value={db.cardsDatabase}>
      <Header />
      <div>
        <CardsDisplay />
      </div>
    </CardContext.Provider>
  );
}

export default App;
