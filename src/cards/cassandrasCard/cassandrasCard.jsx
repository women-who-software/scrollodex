import React from "react";
import "./cassandrasCard.scss";
import image from "./creinhart.jpeg";

function CassandrasCard() {
  return (
    <div className="cassCardContainer">
        <img className="imageContainer" src={image} alt="cassandra" />
      
      <div className="card">
        <h3>Cassandra Reinhart</h3>
        <p>Full Stack Developer</p>
        
        <a
          rel="noreferrer"
          className="link"
          target="_blank"
          href="https://www.linkedin.com/in/cassandra-reinhart-software-development/">
          {"LinkedIn"}
        </a>
        <a
          rel="noreferrer"
          className="link"
          target="_blank"
          href="https://github.com/cassreinhart">
          {"GitHub"}
        </a>
      </div>
    </div>
  );
}

export default CassandrasCard; //what is this??