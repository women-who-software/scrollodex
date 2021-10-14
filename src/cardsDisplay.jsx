import React from "react";
import "./cardsDisplay.scss";

import ExampleCard from "./cards/exampleCard/exampleCard";
import IndigoCard from "./cards/indigoCard/indigoCard";

// @Indigo - basically you use require(‘fs’) and require(‘path’) then parse the directory. Some assumptions will need to be made like directories that end in -Card for example. Then, in this case to keep with the example, find all files ending in -Card.jsx and assume that the component name matches the file name minus the extension

function CardsDisplay(props) {
  return (
    <div className="cardholder">
      <div>
        <ExampleCard />
      </div>

      <div>
        <IndigoCard />
      </div>
    </div>
  );
}

export default CardsDisplay;
