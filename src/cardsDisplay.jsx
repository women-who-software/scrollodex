import React from "react";
import "./cardsDisplay.scss";


import ExampleCard from "./cards/exampleCard/exampleCard";
import IndigoCard from "./cards/indigoCard/indigoCard";
import KristiCard from './cards/kristiCard/kristiCard';
import JennDiazCard from './cards/jennDiazCard/jennDiazCard'


function CardsDisplay(props) {
  return (
    <div className="cardholder">
    
      <div><ExampleCard /></div>

      <div><JennDiazCard /></div>

      <div><IndigoCard /></div>

      <div><KristiCard /></div>


    </div>
  );
}

export default CardsDisplay;
